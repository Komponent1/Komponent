import React, { Children, useState } from 'react';
import * as style from './style';

export const makeDummyElement = (color: string) => (
  <style.item style={{ background: color }}></style.item>
)

const Carousel: React.FC = ({ children }) => {
  const elems = Children.toArray(children);
  const list = [
    React.cloneElement(elems[elems.length - 1]),
    ...elems,
    React.cloneElement(elems[0])
  ];
  const [idx, setIdx] = useState<number>(1);
  const [sec, setSec] = useState<number>(0.5);
  const [isTransitioned, setIsTransitioned] = useState<boolean>(false);

  const move = (idx: number, sec: number) => {
    if (sec !== 0) setIsTransitioned(true);
    setSec(sec);
    setIdx(idx);
  }

  return (
    <style.wrapper>
      <style.slider idx={idx} sec={sec}
        onTransitionEnd={() => {
          setIsTransitioned(false);
          if (idx === 0) move(list.length - 2, 0);
          else if (idx === list.length - 1) move(1, 0);
        }}>
        {list.map(e => <>{e}</>)}
      </style.slider>
      <style.button position="left" onClick={() => {
        if (isTransitioned) return;
        move(idx - 1, 0.5);
      }}>{'<<'}</style.button>
      <style.button position="right" onClick={() => {
        if (isTransitioned) return;
        move(idx + 1, 0.5);
      }}>{'>>'}</style.button>
    </style.wrapper>
  )
};

export default Carousel;
