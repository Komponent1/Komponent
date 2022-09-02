import React, { useEffect, useState } from 'react';
import * as style from './style';

type Prop = {
  children: React.Node[],
  auto?: boolean
  width?: string,
  height?: string,
}
const Carousel: React.FC = ({ children, auto = true, width = '100%', height = '100%' }: Prop) => {
  const list = [
    React.cloneElement(children[children.length - 1]),
    ...children,
    React.cloneElement(children[0])
  ];
  const [state, setState] = useState({ idx: 1, sec: 0.5 });
  const [isTransitioned, setIsTransitioned] = useState<boolean>(false);

  const move = (idx: number, sec: number) => {
    if (sec !== 0) setIsTransitioned(true);
    setState({ idx, sec });
  }

  useEffect(() => {
    if (auto) {
      const id = setInterval(() => {
        if (isTransitioned) return;
        setState(prev => ({ idx: prev.idx + 1, sec: 0.5 }));
      }, 3000);

      return () => clearInterval(id);
    }
  }, [ auto ]);

  return (
    <style.wrapper className='kui_slidecarousel'
      width={width} height={height}>
      <style.slider className='kui_slidecarousel_slider'
        idx={state.idx} sec={state.sec} num={children.length}
        onTransitionEnd={() => {
          setIsTransitioned(false);
          if (state.idx === 0) move(list.length - 2, 0);
          else if (state.idx === list.length - 1) move(1, 0);
        }}>
        {list.map((e, i) => (
          <style.item className='kui_slidecarousel_item' key={i}>{e}</style.item>
        ))}
      </style.slider>
      <style.button className='kui_slidecarousel_lbutton'
        position="left" onClick={() => {
        if (isTransitioned) return;
        move(state.idx - 1, 0.5);
      }}>{'<<'}</style.button>
      <style.button className='kui_slidecarousel_rbutton'
        position="right" onClick={() => {
        if (isTransitioned) return;
        move(state.idx + 1, 0.5);
      }}>{'>>'}</style.button>
    </style.wrapper>
  )
};

export default Carousel;
