import React, { useState } from 'react';
import * as style from './style';

type Config = {
  text: string,
  act: (e: MouseEvent, value: string) => void | any
}
type Prop = {
  title: string
  config: Config[]
  init?: boolean
}
const Opendrawer: React.FC = ({ title, config, init = false }: Prop) => {
  const [ open, setOpen ] = useState<boolean>(init);

  return (
    <style.div className='kui_opendrawer'>
      <style.head className='kui_opendrawer_head'
        onClick={() => setOpen(prev => !prev)}>
        <style.name className='kui_opendrawer_name'>{title}</style.name>
        <style.btn className='kui_opendrawer_btn'>
          {open ? '\u25b2' : '\u25bc'}
        </style.btn>
      </style.head>
      <style.ul className='kui_opendrawer_ul' height={open ? 10 : 0}>
        {config.map((conf, i) => (
          <style.li className='kui_opendrawer_li' key={i}
            onClick={e => conf.act(e, conf.text)}>
            {conf.text}
          </style.li>
        ))}
      </style.ul>
    </style.div>
  )
};

export default Opendrawer;
