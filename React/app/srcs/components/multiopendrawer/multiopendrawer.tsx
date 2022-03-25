import React, { useState } from 'react';
import * as style from './style';

type Config = {
  title: string,
  list: {
    text: string,
    act: Function
  }[]
}
type Prop = {
  config: Config[]
  direction?: 'row'|'column',
  init?: number
}

const Multiopendrawer: React.FC = ({ config, direction = 'column', init = -1 }: Prop) => {
  const [ select, setSelect ] = useState<boolean[]>(config.map((_, i) => init === i ? true : false));

  return (
    <style.div className='kui_multiopendrawer' direction={direction}>
      {config.map((conf, i) => (
        <style.drawer className='kui_multiopendrawer_drawer' key={i}>
          <style.head className='kui_multiopendrawer_head'
            onClick={() => setSelect([ ...select.slice(0, i), !select[i], ...select.slice(i + 1) ])}>
            <style.name className='kui_multiopendrawer_name'>{conf.title}</style.name>
            <style.btn className='kui_multiopendrawer_btn'>
              {select[i] ? '\u25b2' : '\u25bc'}
            </style.btn>
          </style.head>
          <style.ul className='kui_multiopendrawer_ul' height={select[i] ? 10 : 0}>
            {conf.list.map((li, j) => (
              <style.li className='kui_multiopendrawer_li' key={j}
                onClick={e => {
                  li.act(e, li.text);
                  setSelect(select.map((_, k) => k === i ? true : false));
                }}>
                {li.text}
              </style.li>
            ))}
          </style.ul>
        </style.drawer>
      ))}
    </style.div>
  )
};

export default Multiopendrawer;
