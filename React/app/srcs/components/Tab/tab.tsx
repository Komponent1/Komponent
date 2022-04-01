import React, { useState, useEffect } from 'react';
import * as style from './style';

type Prop = {
  titles: string[]
  children: React.Node[]
}

const Tab: React.FC = ({ titles, children }: Prop) => {
  const [ idx, setIdx ] = useState<number>(0);

  return (
    <style.div className='kui_tab'>
      <style.nav className='kui_tab_nav'>
        <style.glider className='kui_tab_glider'
          num={titles.length} idx={idx}/>
        {titles.map((title, i) => (
          <style.navitem className='kui_tab_navitem'
            key={i}
            num={titles.length}
            onClick={() => setIdx(i)}>
            <p>{title}</p>
          </style.navitem>
        ))}
      </style.nav>
      <style.item className='kui_tab_item'>
        {children[idx]}
      </style.item>
    </style.div>
  )
};

export default Tab;
