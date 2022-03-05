import React, { useState } from 'react';
import * as style from './style';

type Prop = {
  tag: string,
  options: string[],
  setOption: (option: string, idx?: number) => void|any
}
const Dropdown: React.FC = ({ tag, options, setOption }: Prop) => {
  const [display, setDisplay] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  return (
    <style.div className='kui_dropdown'>
      <style.box className='kui_dropdown_box'
        onClick={() => setDisplay(prev => !prev)}
        active={display}
        value={value}>
        {value !== '' ? value : tag}
      </style.box>
      <style.menu className='kui_dropdown_menu' show={display}>
        {options.map((option, i) => (
          <style.item className='kui_dropdown_item' key={i}
            onClick={() => {
              setValue(option);
              setDisplay(false);
              setOption(option);
            }}>
            {option}
          </style.item>
        ))}
      </style.menu>
    </style.div>
  );
};

export default Dropdown;
