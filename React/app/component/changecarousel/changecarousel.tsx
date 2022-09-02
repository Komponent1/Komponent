import React, { useState, useEffect } from 'react';
import * as style from './style';

type Prop = {
  children: React.Node,
  width: string,
  height: string,
  auto?: boolean
}
const ChangeCarousel: React.FC = ({ children, width = '100%', height = '100%', auto = true }: Prop) => {
  const [ idx, setIdx ] = useState<number>(0);
  const [ isChanged, setIsChanged ] = useState<Boolean>(false);
  const change = (i: number) => {
    if (i === idx || isChanged) return;
    setIsChanged(true);
    setIdx(i);
  }

  useEffect(() => {
    if (auto) {
      const id = setInterval(() => {
        if (isChanged) return;
        setIsChanged(true);
        setIdx(prev => prev + 1 <= children.length - 1 ? prev + 1 : 0);
      }, 3000)

      return () => clearInterval(id);
    }
  }, [ auto ])

  return (
    <style.div className="kui_changecarousel"
      width={width} height={height}>
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
              onClick={() => change(i)} 
              select={idx === i}>
              <div></div>
            </style.btn>
        )}
      </style.btnset>
    </style.div>
  )
};

export default ChangeCarousel;
