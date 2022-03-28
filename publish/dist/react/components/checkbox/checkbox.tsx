import React from 'react';
import * as style from './style';

const Checkbox: React.FC = ({ checked, setCheck }) => {
  
  return (
    <style.box checked={checked} onClick={() => setCheck()}>

    </style.box>
  )
};

export default Checkbox;
