import React, { useEffect, useState } from 'react';

export const useAutocomplete = (fetcher: () => Promise<{data: string[]}>) => {
  const [text, setText] = useState<string>('');
  const [lis, setLis] = useState<string[]>([]);
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(async () => {
    const { data } = await fetcher();
    setLis(data.filter(e => e.search(text) !== -1 && text !== ''));
  }, [ text ]);

  const onChange = (e: React.ChangEvent) => setText(e.target.value);
  const onFocus = () => setFocus(true);
  const outFocus = () => setFocus(false);
  const visible = () => (lis.length !== 0 && focus);


  return { lis, text, setText, onChange, focus, onFocus, outFocus, visible };
};
