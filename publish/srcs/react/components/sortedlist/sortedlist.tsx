import React, { useState, useEffect } from 'react';
import * as style from './style';
import { Checkbox } from '../';
import * as _ from 'lodash';

type tList = { name: string, [key: string]: string };
type Prop = {
  checkoption?: (checked: boolean[]) => any|void,
  config: tList[]
};
const Sortedlist: React.FC = ({ checkoption, config }: Prop) => {
  const [sorted, setSorted] = useState<tList[]>(_.cloneDeep(config));
  const [checked, setChecked] = useState<boolean[]>(Array.from({ length: config.length }).map(_ => false));
  const setCheck = (idx: number) => {
    setChecked(checked.map((e, i) => idx === i ? !e : e));
  }
  const sorting = (label: string) => {
    setSorted(_.sortBy(sorted, label))
  }

  return (
    <style.div>
      <style.liTitle>
        {Object.entries(config[0]).map(([key, value], j) => (
          <style.item key={j} onClick={() => sorting(key)}>
            <span style={{ marginLeft: '5px' }}>{key}</span>
            {key === 'name' ? <div className='list_space' style={{ width: '17px' }}/> : null}
          </style.item>
        ))}
      </style.liTitle>
      {sorted.map((li, i) => (
        <style.li key={i}>
          {Object.entries(li).map(([key, value], j) => (
            <style.item key={j}>
              {(key === 'name' && checkoption) ? <Checkbox checked={checked[i]} setCheck={() => setCheck(i)}/> : null}
              <span style={{ marginLeft: '5px' }}>{value}</span>
            </style.item>
          ))}
        </style.li>
      ))}
    </style.div>
  )
};

export default Sortedlist;
