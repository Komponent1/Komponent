import React, { useState, useEffect, useRef } from 'react';
import { Div } from '../utils';
import * as style from './style';

type Config = {
  menu: string
  context: string
}
type Prop = {
  config: Config[]
}

const usePosition = () => {
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const setPosition = e => {
    setTop(e.nativeEvent.offsetY);
    setLeft(e.nativeEvent.offsetX);
  };

  return [top, left, setPosition];
}
const Context: React.FC = ({ top, left, visible, children }: { top: number, left: number, visible: boolean, children: React.Node }) => (
  <style.context top={top} left={left} visible={visible}>
    {children}
  </style.context>
);
const ContextItem: React.FC = ({ id, visible, setVisible, data }: { id: number, visible: number, setVisible: Function, data: Config }) => {
  const [top, left, setPosition] = usePosition();
  const onClick = e => {
    e.stopPropagation();
    setVisible(id);
    setPosition(e);
  }

  return (
    <style.item onClick={onClick}>
      {data.menu}
      <Context top={top} left={left} visible={id === visible}>
        {data.context}
      </Context>
    </style.item>
  ) 
};


/* wrapper 역할 */
const ContextMenu: React.FC = ({ config }: Prop) => {
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
      {config.map((e, i) => 
        <ContextItem key={i} id={i} visible={visible} setVisible={setVisible} data={e} />      
      )}
    </style.wrapper>
  )
}

export default ContextMenu;
