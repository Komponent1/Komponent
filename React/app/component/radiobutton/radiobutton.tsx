import React, { useState } from 'react';
import * as style from './style';

type Prop = {
  labels: string[],
  setValue: (value: string, i?:number) => {}
  init?: number
  layout?: 'row'|'column'
}
const RadioButton: React.FC = ({ labels, setValue, init = -1, layout = 'row' }) => {
  const [select, setSelect] = useState<number>(init);

  return (
    <style.div className='kui_radiobutton'
      flex={layout}>
      {labels.map((label, i) => (
        <style.btnset className='kui_radiobuttn_btnset' key={i}
          onClick={() => {setSelect(i);setValue(label, i)}}>
          <style.button>
            <style.btnbackground />
            <style.btnround select={select === i}/>
            <style.btnicon select={select === i}/>
          </style.button>
          <style.label>{label}</style.label>
        </style.btnset>
      ))}
    </style.div>
  )
}

export default RadioButton;
