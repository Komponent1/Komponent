import React, { useState, useEffect } from 'react';
import * as style from './style';

type Config = {
  name: string,
  shortcut?: string,
  li?: Config[],
  act?: Function  
}
type Prop = {
  config: Config[]
}
const useShows = (num: number, parentClass: string) => {
  const [shows, setShows] = useState<boolean>(Array.from({ length: num }).map(() => false));

  useEffect(() => {
    const off = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(parentClass)) {
        setShows(shows.map(_ => false));
      }
    }
    window.addEventListener('click', off);

    return () => window.removeEventListener('click', off);
  }, []);

  const setShow = (i: number) => {
    setShows(shows.map((flag, j) => i === j ? !flag : false));
  }

  return [ shows, setShow ];
}
const Ul: React.FC = ({ show, type, config }: { show: boolean, type: string, config: Config }) => {
  const [shows, setShow] = useShows(config.li? config.li.length : 0, '.kui_licontextmenu');
  
  return type === 'main' ?
  (
    <style.mainul className='kui_licontextmenu_ul'
      show={show}>
      {config.li?.map((e, i) => (
        <style.li className='kui_licontextmenu_li' key={i}
          sub={e.li ? true : false}
          onClick={event => {
            if (!e.li) return;
            event.stopPropagation();
            e.act? e.act() : null;
            setShow(i);
          }}>
          {e.name}
          {e.li ? <Ul type='sub' show={shows[i]} config={e}/>: null}
        </style.li>
      ))}
    </style.mainul>
  ): (
    <style.subul className='kui_licontextmenu_subul'
      show={show}>
      {config.li?.map((e, i) => (
        <style.li className='kui_licontextmenu_li' key={i}
          sub={e.li ? true : false}
          onClick={event => {
            if (!e.li) return;
            event.stopPropagation();
            e.act? e.act() : null;
            setShow(i);
          }}>
          {e.name}
          {e.li ? <Ul type='sub' show={shows[i]} config={e}/>: null}
        </style.li>
      ))}
    </style.subul>
  )
}

const LiContextMenu: React.FC = ({ config }: Prop) => {
  const [ shows, setShow ] = useShows(config.length, '.kui_contextmenu');

  return (
    <style.div className='kui_licontextmenu'>
      {config.map((ul , i) => (
        <style.icon className='kui_licontextmenu_icon' key={i}
          select={shows[i]}>
          <p onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            ul.act? ul.act() : null;
            setShow(i);
          }}>{ul.name}</p>
          <Ul show={shows[i]} config={ul} type='main'/>
        </style.icon>
      ))}
    </style.div>
  )
};

export default LiContextMenu;
