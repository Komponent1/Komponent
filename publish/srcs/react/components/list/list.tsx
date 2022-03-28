import React, { useState } from 'react';
import * as style from './style';
import { Checkbox } from '../';
import useFetch from '../../hooks/useFetch';

const List: React.FC = ({ lis }) => {
  const [checked, setChecked] = useState<boolean[]>(Array.from({ length: lis.length }).map(_ => false));
  const setCheck = (idx: number) => {
    setChecked(checked.map((e, i) => idx === i ? !e : e));
  }

  return (
    <style.div>
      <style.liTitle>
        {Object.entries(lis[0]).map(([key, value], j) => (
          <style.item key={j}>
            <span style={{ marginLeft: '5px' }}>{key}</span>
            {key === 'name' ? <div className='list_space' style={{ width: '17px' }}/> : null}
          </style.item>
        ))}
      </style.liTitle>
      {lis.map((li, i) => (
        <style.li key={i}>
          {Object.entries(li).map(([key, value], j) => (
            <style.item key={j}>
              {key === 'name' ? <Checkbox checked={checked[i]} setCheck={() => setCheck(i)}/> : null}
              <span style={{ marginLeft: '5px' }}>{value}</span>
            </style.item>
          ))}
        </style.li>
      ))}
    </style.div>
  )
};

const Wrapper: React.FC = ({ api }) => {
  return (
    <div></div>
  )
}

export default List;
