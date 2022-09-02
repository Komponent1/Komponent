import React, { useState, useEffect } from 'react';
import * as style from './style';

type Prop = {
  fetcher: () => Promise<{ data: string | number }>,
  children: React.Node
};
const Badge: React.FC = ({ fetcher, children }: Prop) => {
  const [ count, setCount ] = useState<number>(0);

  useEffect(async () => {
    const { data } = await fetcher();
    setCount(data);
  }, []);

  return (
    <style.badge className="kui_badge">
      {children}
      <style.icon className="kui_badge_icon"
        count={count}>
        {count}
      </style.icon>
    </style.badge>
  )
};

export default Badge;
