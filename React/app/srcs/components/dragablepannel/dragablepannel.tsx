import React, { useState, useRef, useEffect } from 'react';
import * as style from './style';

const Dragable: React.FC = React.forwardRef(({ children, parent }, ref) => {
  const [xy, setXY] = useState<number[]>([20, 20]);
  const move = (offsetX, offsetY) => {
    return e => {
      const x = e.pageX - parent.current.offsetLeft - offsetX;
      const y = e.pageY - parent.current.offsetTop - offsetY;

      setXY([x, y]);
    }
  }
  
  const down = e => {
    if (e.target.closest('.dragable') !== ref.current) return;
    
    const id = move(e.offsetX, e.offsetY);
    // const up = e => {
    //   parent.current.removeEventListener('mousemove', id);
    //   // parent.current.removeEventListener('mouseup', this)
    // }
    parent.current.addEventListener('mousemove', id);
    // parent.addEventListener('mouseup', up);
  }
  useEffect(() => { 
    if (!parent.current) return;
    parent.current.addEventListener('mousedown', down);

    return () => parent.current.removeEventListener('mousedown', down);
  }, [ parent ]);

  return (
    <style.dragable className='dragable' ref={ref} xy={xy}>
      {children}
    </style.dragable>
  )
});

const DragablePannel: React.FC = ({ children }) => {
  const pannel = useRef<React.Ref>(null);
  const items = useRef<React.Ref[]>(
    Array.from({ length: Array.isArray(children) ? children.length : 1 }).map(() => React.createRef())
  );

  return (
    <style.pannel ref={pannel}>
      {Array.isArray(children) ? 
        (
          <>
            {children.map((child, i) => (
              <Dragable ref={items.current[i]} parent={pannel}>
                {child}
              </Dragable>
            ))}
          </>
        ) : (
          <Dragable ref={items.current[0]} parent={pannel}>
            {children}
          </Dragable>
        )
    
      }
      
    </style.pannel>
  )
};

export default DragablePannel;
