import React, { useState } from 'react';
import * as style from './style';
import { Tip } from '../';

type Prop = {
  config: {
    icon: string
    type: 'img'|'text',
    tip?: string,
  }[]
}
const Floatdial: React.FC = ({ config }: Prop) => {
  const [hover, setHover] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0);
  return (
    <style.div className='kui_floatdial'
      onMouseOver={() => {
        setHover(true);
        setScale(1);
      }}
      onMouseLeave={() => setScale(0)}>
      <style.button className='kui_floatdial_button'>
        +
      </style.button>
      <style.list hover={hover}>
        {config.map((item, i) => {
          if (item.tip) {
            return (
              <Tip text={item.tip} key={i}>
                <style.item key={i} className='kui_floatdial_item'
                  scale={scale} onTransitionEnd={() => scale === 0 ? setHover(false):null}>
                  {item.type === 'img' ? <img src={item.icon}/> : item.icon}
                </style.item>
              </Tip>
            )
          } else {
            return (
              <style.item key={i} className='kui_floatdial_item'
                scale={scale} hover={hover}
                onTransitionEnd={() => scale === 0 ? setHover(false):null}>
                {item.type === 'img' ? <img src={item.icon}/> : item.icon}
              </style.item>
            )
          }
        })}
      </style.list>
    </style.div>
  );
};

export default Floatdial;
