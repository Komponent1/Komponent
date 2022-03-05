import React, { useState, useRef, useEffect } from 'react';
import * as style from './style';

type Prop = {
  children: React.Node[],
  delays: number[],
  height?: string
}
const ParallexScroll: React.FC = ({ children, delays, height = '100%' }: Prop) => {
  const ref = useRef<React.Ref>(null);
  const refs = useRef(
    Array.from({ length: delays.length }).map(_ => React.createRef())
  );

  useEffect(() => {
    if (!ref.current) return;

    const addheight = (i: number) => {
      let height = 0;
      for (let j = i; j > 0; j--) {
        height += refs.current[i].current.offsetHeight;
      }
      return height;
    }

    const func = (e: React.ScrollEvent) => {
      const { scrollTop } = e.target;

      refs.current.forEach((layer, i) => {
        if (scrollTop >= i * layer.current.offsetHeight) {
          layer.current.style.setProperty('--y', (scrollTop * ((delays[i] < 1 && delays[i]) ? delays[i] : 1)) - addheight(i) + 'px');
          /* This is performance low! so control dom directly now */
          // setYs(ys.map((y, j) => j === i ?
          //   (scrollTop * ((delays[i] < 1 && delays[i]) ? delays[i] : 1)) - addheight(i)
          //   : y))
        }
      })
    }
    ref.current.addEventListener('scroll', func);

    return () => ref.current.removeEventListener('scroll', func);
  }, [ ref ])

  return (
    <style.div className='kui_parallexscroll'
      height={height} ref={ref}>
      {children.map((comp, i) =>(
        <style.layer className='kui_parallexscroll_layer' key={i}
          ref={refs.current[i]}>
          {comp}
        </style.layer>
      ))}
    </style.div>
  )
};

export default ParallexScroll;
