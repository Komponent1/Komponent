import React, { useState, useEffect } from 'react';
import { fetcher } from '../../utils';
import * as style from './style';

const Tab: React.FC = ({ tabs }) => {
  const [ idx, setIdx ] = useState<number>(0);

  return (
    <style.div>
      <style.nav>
        {tabs.map(({ title }, i) => (
          <style.navitem
            key={i}
            num={tabs.length}
            select={i === idx}
            onClick={() => setIdx(i)}>
            {title}
          </style.navitem>
        ))}
      </style.nav>
      <style.item>
        {tabs[idx].comp}
      </style.item>
    </style.div>
  )
};

export default Tab;
