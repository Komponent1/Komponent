import React, { useState } from 'react';
import * as style from './style';
import { useAutocomplete } from './useAutocomplete';

type Prop = {
  placeholder: string,
  fetcher: () => Promise<{data: string[]}>
}
const Autocomplete: React.FC = ({placeholder, fetcher}: Prop) => {
  const {
    lis, text, setText,
    onChange, onFocus, outFocus,
    visible
  } = useAutocomplete(fetcher);

  return (
    <style.div className="kui_autocomplete">
      <style.input className="kui_autocomplete_input"
        placeholder={placeholder}
        value={text}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={outFocus} />
        <style.ul className="kui_autocomplete_ul"
          show={visible()}>
          {lis.map((li, i) => (
            <style.li className="kui_autocomplete_input"
              key={i} onClick={() => {
                setText(li)
              }}>
              {li}
            </style.li>
          ))}
        </style.ul>
    </style.div>
  );
};

export default Autocomplete;
