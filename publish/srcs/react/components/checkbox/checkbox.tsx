import React, { useState } from 'react';
import * as style from './style';

const Checkbox: React.FC = ({ init = false, setCheck }) => {
  const [checked, setChecked] = useState<boolean>(init)
  const [wave, setWave] = useState<{ opacity: number, scale: number, duration: number }>(
    { opacity: 0, scale: 0, duration: 0 }
  )
  
  return (
    <style.box className='kui_checkbox'
      onMouseDown={() => setWave({ opacity: 1, scale: 1, duration: 0.3 })}
      onMouseUp={e => {
        e.stopPropagation();
        setWave({ opacity: 0, scale: 0, duration: 0 })
        setCheck(!checked);
        setChecked(prev => !prev);
      }}>
      <style.outline className='kui_checkbox_outline' checked={checked}>
        V
      </style.outline>
      <style.wave className='kui_checkbox_wave' {...wave}/>
      <style.background className='kui_checkbox_background' />
    </style.box>
  )
};

export default Checkbox;
