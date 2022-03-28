import React, { useState } from 'react';
import * as style from './style';

type Config = {
  type: string
  src?: string | HTMLElement,
  
  act: Function
};
type Prop = {
  config: Config[],
  children?: React.Node | React.Node[]
};
const ToggleMenu: React.FC = ({ config, children }: Prop) => {
  const [select, setSelect] = useState<number>(false);


  if (children) {
    if (Array.isArray(children)) {
      return (
        <style.togglemenu className='togglemenu'>
          {children.map((child, i) =>(
            <style.icon key={i}
              select={select === i} last={i === children.length}
              onClick={() => { config[i].act();setSelect(i) }}>
              {child}
            </style.icon>
          ))}
        </style.togglemenu>
      )
    } else {
      return (
        <style.togglemenu className='togglemenu'>
          <style.icon>
            {children}
          </style.icon>
        </style.togglemenu>
      )
    }
  }

  return (
    <style.togglemenu className='togglemenu'>
      {config.map((e, i) => {
        if (e.type === 'text') {
          return (
            <style.icon key={i}
              select={select === i} last={i === config.length - 1}
              onClick={() => { e.act();setSelect(i) }}>
              {e.src}
            </style.icon>
          )
        } else {
          return (
            <style.icon key={i}
              select={select === i} last={i === config.length - 1}
              onClick={() => { e.act();setSelect(i) }}>
              <img src={e.src} />
            </style.icon>
          )
        }
      })}
    </style.togglemenu>
  )
};

export default ToggleMenu;
