import React, { useState } from 'react';
import * as style from './style';

type Prop = {
  children: React.Node,
  width: number,
  height: number,
  auto?: boolean
}
const ChangeCarousel: React.FC = ({ children, width = 400, height = 200, auto = false }: Prop) => {
  const [ idx, setIdx ] = useState<number>(0);
  const [ isChanged, setIsChanged ] = useState<Boolean>(false);
  const click = (i: number) => {
    if (i === idx || isChanged) return;
    setIsChanged(true);
    setIdx(i);
  }

  return (
    <style.div width={width} height={height}>
      {children.map((e, i) => 
        <style.item key={`item_${i}`}
          opacity={idx === i ? 1 : 0}
          onTransitionEnd={() => setIsChanged(false)}>
          {e}
        </style.item>
      )}
      <style.btnset>
        {children.map(
          (_, i) =>
            <style.btn key={`btn_${i}`}
              onClick={() => click(i)} 
              select={idx === i}/>
        )}
      </style.btnset>
    </style.div>
  )
};

export default ChangeCarousel;
