import React, { useRef, useState, useEffect } from 'react';
import * as style from './style';

type Prop = {
  scrolldiv: React.Ref,
  items: React.Ref
}
const ScrollNav: React.FC = ({ scrolldiv, items }: Prop) => {
  const [select, setSelect] = useState<number>();

  const getOffset = (() => {
    let offsetTop = 0;
    let res = [];

    return () => {
      if (scrolldiv.current.scrollHeight === offsetTop) {
        return res;
      }
      offsetTop = scrolldiv.current.scrollHeight;
      res = items.current.map(({ current }) => {
        const [ offset, clientHeight ] = [ current.offsetTop, current.clientHeight ];
        return [ offset - clientHeight / 2, offset + clientHeight / 2 ];
      });

      return res;
    }
  })();

  useEffect(() => {
    if (!scrolldiv.current) return;
    scrolldiv.current.addEventListener('scroll', e => {
      const { scrollTop } = e.target;
  
      const idx = getOffset().findIndex(([from ,to]) => (
        scrollTop >= from && scrollTop < to
      ))
      setSelect(idx);
    });
    console.log(items)
  }, [ scrolldiv ])



  return (
    <style.div className='kui_scrollnav'
      num={items.current.length}>
      {items.current.map((item, i) => (
        <style.item className='kui_scrollnav_item' key={i}
          select={select === i}
          onClick={(_, i) => {
            scrolldiv.current.scrollTop = item.current.offsetTop - scrolldiv.current.offsetTop;
          }} />
      ))}
    </style.div>
  );
};

export default ScrollNav;
