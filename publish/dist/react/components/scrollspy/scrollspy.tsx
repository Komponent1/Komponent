import React, { useState, useEffect, useRef } from 'react';
import * as style from './style';
import {  throttle } from '../../utils';

type prop = {
  children: React.Node[],
}
const Scrollspy: React.FC = ({ children }: prop) => {
  const [select, setSelect] = useState();
  const scrollref = useRef<React.Ref>(null);
  const refs = useRef<[]>(
    Array.from({ length: children.length }).map(() => React.createRef())
  );
  const click = (e, idx: number) => {
    e.stopPropagation();
    refs.current[idx].current.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }
  const getOffset = (() => {
    let offsetTop = 0;
    let res = [];

    return () => {
      if (window.innerHeight === offsetTop) {
        return res;
      }
      offsetTop = window.innerHeight;
      res = refs.current.map(({ current }) => {
        const [ offset, clientHeight ] = [ current.offsetTop, current.clientHeight ];
        return [ offset - clientHeight / 2, offset + clientHeight / 2 ];
      })
      
      return res;
    }
  })();
  useEffect(() => {
    
    scrollref.current.addEventListener("scroll", throttle(scrollevent, 300));

    return scrollref.current.removeEventListener("scroll", throttle(scrollevent, 300));
  }, [])
  const scrollevent = (e: any) => {
    const { scrollTop } = e.target;

    const idx = getOffset().findIndex(([from, to]) => (
      scrollTop >= from && scrollTop < to
    ));
    setSelect(idx + 1);
  }

  return (
    <style.div>
      <style.nav>
        {children.map((elem, i) => (
          <style.navitem key={`nav${i}`}
            num={children.length}
            select={i === select}
            onClick={e => click(e, i)} />
        ))}
      </style.nav>
      <style.itemwrapper ref={scrollref}>
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
