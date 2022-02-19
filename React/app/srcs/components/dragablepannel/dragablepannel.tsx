import React, { useState, useRef, useEffect } from 'react';
import * as style from './style';

const Dragable: React.FC = React.forwardRef(({ children, parent }, ref) => {
  const [xy, setXY] = useState<number[]>([20, 20]);
  const [id, setId] = useState<Function>(null);
  const move = (offsetX, offsetY) => {
    return (e: React.MouseEvent) => {
      const x = e.pageX - parent.current.offsetLeft - offsetX;
      const y = e.pageY - parent.current.offsetTop - offsetY;

      setXY([x, y]);
    }
  }
  
  const down = e => {
    if (e.target.closest('.dragable') !== ref.current) return;
    
    const id = move(e.offsetX, e.offsetY);
    setId(_ => id);
    parent.current.addEventListener('mousemove', id);
  }
  const up = e => {
    e.stopPropagation();
    if (id === null) return;
    parent.current.removeEventListener('mousemove', id);
    setId(null);
  }
  useEffect(() => { 
    if (!parent.current) return;
    parent.current.addEventListener('mousedown', down);

    return () => parent.current.removeEventListener('mousedown', down);
  }, [ parent ]);
  useEffect(() => {
    parent.current.addEventListener('mouseup', up);
    parent.current.addEventListener('mouseleave', up);

    return () => {
      parent.current.removeEventListener('mouseup', up);
      parent.current.removeEventListener('mouseleave', up);
    }
  }, [ id ]);

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
              <Dragable key={i} ref={items.current[i]} parent={pannel}>
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
