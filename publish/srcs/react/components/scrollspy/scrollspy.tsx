import React, { useState, useRef } from 'react';
import * as style from './style';
import { ScrollNav } from '../';

type prop = {
  children: React.Node[],
  height: string
}
const Scrollspy: React.FC = ({ children, height = '100%' }: prop) => {
  const scrollref = useRef<React.Ref>(null);
  const refs = useRef<[]>(
    Array.from({ length: children.length }).map(() => React.createRef())
  );

  return (
    <style.div>
      <ScrollNav scrolldiv={scrollref} items={refs}/> 
      <style.itemwrapper ref={scrollref} height={height}>
        {children.map((elem, i) => (
          <style.item key={`item${i}`} ref={refs.current[i]}>
            {elem}
          </style.item>
        ))}
      </style.itemwrapper>
    </style.div>
  )
}

export default Scrollspy;
