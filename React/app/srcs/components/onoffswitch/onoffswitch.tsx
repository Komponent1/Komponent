import React, { useState } from 'react';
import * as style from './style';

type Prop = {
  setValue: (on: boolean) => void|any
}
const useOnOff = (setValue: (on: boolean) => void|any) => {
  const [ state, setState ] = useState<boolean>(false);
  const [ styling, setStyle ] = useState<{ x: number, left: number, right: number }>(
    { x: -10, right: 100, left: 0 }
  );

  const on = () => {
    setState(true);
    setValue(true);
    setStyle({ x: 110, right: 0, left: 100 });
  }
  const off = () => {
    setState(false);
    setValue(false);
    setStyle({ x: -10, right: 100, left: 0 });
  }
  const toggle = () => {
    if (state) off();
    else on();
  }

  return { toggle, styling }
};

const OnOffSwitch: React.FC = ({ setValue }: Prop) => {
  const { toggle, styling } = useOnOff(setValue);

  return (
    <style.div className='kui_onoffswitch' onMouseUp={() => toggle()}>
      <style.icon className='kui_onoffswitch_icon' x={styling.x}/>
      <style.leftbar className='kui_onoffswitch_leftbar' width={styling.left}/>
      <style.rightbar className='kui_onoffswitch_rightbar' width={styling.right}/>
    </style.div>
  )
};

export default OnOffSwitch;
