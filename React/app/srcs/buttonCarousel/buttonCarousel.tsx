import React, { useState } from 'react';
import * as style from './style';

const ButtonCarousel: React.FC = ({ children }) => {
  const [ idx, setIdx ] = useState<number>(0);
  const [ isChanged, setIsChanged ] = useState<Boolean>(false);
  const click = (i: number) => {
    if (i === idx || isChanged) return;
    setIsChanged(true);
    setIdx(i);
  }

  return (
    <style.div>
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

export default ButtonCarousel;
