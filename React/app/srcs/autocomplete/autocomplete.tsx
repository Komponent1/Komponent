import React, { useEffect, useState } from 'react';
import style from './style';

const dummies = [
  
]

const useAutoComplete = (url: string, fetcher: Function) => {
  const [text, setText] = useState<string>('');
  const [lis, setLis] = useState<string[]>([]);

  useEffect(async () => {
    const { data } = await fetcher();
    setLis(data.filter(e => e.search(text) !== -1 && text !== ''));
  }, [ text ]);

  return [ lis, text, setText ];
}
type Prop = {
  placeholder: string,
  url? : string,
  fetcher?: Function
}

const Autocomplete: React.FC = ({placeholder, url, fetcher}: Prop) => {
  const [lis, text, setText] = useAutoComplete(url, fetcher);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <style.div>
      <style.input
        placeholder={placeholder}
        value={text}
        onChange={e => setText(text)}
        onFocuse={() => setFocus(true)}
        onBlur={() => setFocus(false)}/>
        <style.ul
          display={lis.length !== 0 && focus}>
          {lis.map((li, i) => {
            <style.li onClick={() => setText(li)}>
              {li}
            </style.li>
          })}
        </style.ul>
    </style.div>
  );
};

export default Autocomplete;
