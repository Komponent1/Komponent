import React, { useState } from 'react';
import * as style from './style';

type Prop = {
  children: React.Node,
  text: string
  position: 'bottom'|'right'|'left'|'top'
}
const Tip: React.FC = ({ children, text, position = 'left' }: Prop) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <style.div className='kui_tip'
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <style.background className='kui_tip_background'/>
      {children}
      <style.tip className='kui_tip_tip'
        hover={hover} position={position}>
        {text}
      </style.tip>
    </style.div>
  );
}
;
export default Tip;
