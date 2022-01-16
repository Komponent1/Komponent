import React, { useState, useEffect, useRef } from 'react';
import * as style from './style';
import {  throttle } from '../utlls';

type prop = {
  num: number,
}
const Scrollspy: React.FC = ({ num }: prop) => {
  const [select, setSelect] = useState();
  const refs = useRef<[]>(
    Array.from({ length: num }).map(() => React.createRef())
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
    const scrollevent = (e: any) => {
      const { scrollTop } = e.target.scrollingElement;

      const idx = getOffset().findIndex(([from, to]) => (
        scrollTop >= from && scrollTop < to
      ));
      setSelect(idx);
    }
    window.addEventListener("scroll", throttle(scrollevent, 300));

    return window.removeEventListener("scroll", throttle(scrollevent, 300));
  }, [])

  return (
    <style.div>
      <style.nav>
        {Array.from({ length: num }).map((_, i) => (
          <style.navitem key={`nav${i}`}
            num={num}
            select={i === select}
            onClick={e => click(e, i)} />
        ))}
      </style.nav>
      {Array.from({ length: num }).map((_, i) => (
        <style.item key={`item${i}`} ref={refs.current[i]}/>
      ))}
    </style.div>
  )
}

export default Scrollspy;
