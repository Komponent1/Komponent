import React, { useState } from 'react';
import * as style from './style';
import { Checkbox } from '../';

type Config = {
  name: string,
  [key: string]: any
}
type Prop = {
  checkoption?: (checked: boolean[]) => any|void,
  config: Config[]
}

const List: React.FC = ({ checkoption, config }: Prop) => {
  const [checked, setChecked] = useState<boolean[]>(Array.from({ length: config.length }).map(_ => false));
  const setCheck = (idx: number) => {
    setChecked(checked.map((e, i) => idx === i ? !e : e));
  }

  return (
    <style.div>
      <style.liTitle>
        {Object.entries(config[0]).map(([key, value], j) => (
          <style.item key={j}>
            <span style={{ marginLeft: '5px' }}>{key}</span>
            {key === 'name' ? <div className='list_space' style={{ width: '17px' }}/> : null}
          </style.item>
        ))}
      </style.liTitle>
      {config.map((li, i) => (
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

export default List;
