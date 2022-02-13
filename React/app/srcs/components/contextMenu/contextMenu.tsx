import React, { useState, useEffect, useRef } from 'react';
import { Div } from '../utils';
import * as style from './style';

const usePosition = () => {
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const setPosition = e => {
    setTop(e.nativeEvent.offsetY);
    setLeft(e.nativeEvent.offsetX);
  };

  return [top, left, setPosition];
}

const Context: React.FC = ({ top, left, visible }: { top: number, left: number, visible: boolean }) => (
  <style.context top={top} left={left} visible={visible}/>
);
const ContextItem: React.FC = ({ id, visible, setVisible }: { id: number, visible: number, setVisible: Function }) => {
  const [top, left, setPosition] = usePosition();
  const onClick = e => {
    e.stopPropagation();
    setVisible(id);
    setPosition(e);
  }

  return (
    <style.item onClick={onClick}>
      <Context top={top} left={left} visible={id === visible}/>
    </style.item>
  ) 
};


/* wrapper 역할 */
const ContextMenu: React.FC = ({ num }: { num: number }) => {
  const [visible, setVisible] = useState<number>(-1);
  const ref = useRef<HTMLDivElement>();
  
  useEffect(() => {
    document.body.addEventListener("click", e => {
      e.stopPropagation();
      if (ref.current === e.target) return;
      else setVisible(-1);
    });

    return document.body.removeEventListener("click", e => {
      if (ref.current === e.target) return;
      else setVisible(-1);
    });
  }, []);

  return (
    <style.wrapper ref={ref}>
      {Array.from({ length: num }).map((_, i) => 
        <ContextItem key={`context_${i}`} id={i} visible={visible} setVisible={setVisible}/>
      )}
    </style.wrapper>
  )
}

export default ContextMenu;
