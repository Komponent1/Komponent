import React, { useState, useEffect } from 'react';
import * as style from './style';

type Prop = {
  prev?: string[],
  fetcher?: (text: string) => Promise<void|any> 
}
const Chipsui: React.FC = ({ prev = [], fetcher = async () => {} }: Prop) => {
  const [chips, setChips] = useState<string[]>([...prev]);
  const [before, setBefore] = useState<string[]>([...prev]);

  const checkDiff = (arr1: string[], arr2: string[]) => {
    if (arr1.length > arr2.length) {
      return arr1.filter(i => !arr2.some(j => j === i))[0];
    } else {
      return arr2.filter(i => !arr1.some(j => j === i))[0];
    }
  }
  
  useEffect(() => {
    if (chips.length === before.length) return;
    fetcher(checkDiff(chips, before))
      .then(() => setBefore([...chips]))
      .catch(err => {
        alert(err);
        setChips([...before]);
      })
  }, [ chips ]);

  return (
    <style.div className='kui_chips'>
      <style.wrapper className='kui_chips_wrapper'>
        {chips.map((chip, i) => (
          <style.chip className='kui_chips_chip' key={i}>
            <span>{chip}</span>
            <style.del onClick={() => setChips(chips.filter((_, j) => j !== i))}>{'\u2715'}</style.del>
          </style.chip>
        ))}
      </style.wrapper>
      <style.input placeholder='add tag'
        onKeyUp={(e: React.KeyBoardEvent) => {
          if (e.key !== 'Enter') return;
          if (chips.some(text => text === e.target.value)) {
            alert('Is already tag');
            return;
          }
          setChips([...chips, e.target.value]);
          e.target.value = '';
        }}/>
    </style.div>
  )
};

export default Chipsui;
