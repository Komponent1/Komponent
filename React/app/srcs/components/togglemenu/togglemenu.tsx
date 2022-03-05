import React, { useState } from 'react';
import * as style from './style';

type Config = {
  type: 'img'|'text'|'elem',
  src?: string | HTMLElement,
  act: Function
};
type Prop = {
  config: Config[],
  type?: 'normal'|'must'|'multi'
  children?: React.Node | React.Node[]
};

const useMultiSelect = (type) => {
  const [selects, setSelects] = useState<number[]>(type === 'must' ? [ 0 ]: []);

  const check = (i: number) => {
    return selects.some(e => e === i);
  };
  const clear = () => setSelects([]);
  const choice = (i: number, type: string) => {
    if (type === 'normal') {
      if (check(i)) clear();
      else setSelects([ i ]);
    } else if (type === 'multi') {
      if (check(i)) setSelects(selects.filter(e => e !== i));
      else setSelects([...selects, i]);
    } else if (type === 'must') {
      if (check(i)) return;
      else setSelects([ i ]);
    }
  }

  return { check, choice };
};

const ToggleMenu: React.FC = ({ config, children, type = 'must' }: Prop) => {
  const { check, choice } = useMultiSelect(type);

  if (children) {
    if (Array.isArray(children)) {
      return (
        <style.togglemenu className='kui_togglemenu'>
          {children.map((child, i) =>(
            <style.icon className='kui_togglemenu_icon'
              key={i}
              select={check(i)} last={i === children.length}
              onClick={() => { config[i].act();choice(i, type) }}>
              {child}
            </style.icon>
          ))}
        </style.togglemenu>
      )
    } else {
      return (
        <style.togglemenu className='kui_togglemenu'>
          <style.icon className='kui_togglemenu_icon'>
            {children}
          </style.icon>
        </style.togglemenu>
      )
    }
  }

  return (
    <style.togglemenu className='kui_togglemenu'>
      {config.map((e, i) => {
        if (e.type === 'text') {
          return (
            <style.icon className='kui_togglemenu_icon'
              key={i}
              select={check(i)} last={i === config.length - 1}
              onClick={() => { e.act();choice(i, type) }}>
              {e.src}
            </style.icon>
          )
        } else {
          return (
            <style.icon className='kui_togglemenu_icon'
              key={i}
              select={check(i)} last={i === config.length - 1}
              onClick={() => { e.act();choice(i, type) }}>
              <img src={e.src} />
            </style.icon>
          )
        }
      })}
    </style.togglemenu>
  )
};

export default ToggleMenu;
