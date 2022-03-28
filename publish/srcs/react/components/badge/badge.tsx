import React, { useState, useEffect } from 'react';
import * as style from './style';

const Badge: React.FC = ({ fetcher, children }) => {
  const [ count, setCount ] = useState<number>(0);

  useEffect(async () => {
    const { data } = await fetcher();
    setCount(data);
  }, []);

  return (
    <style.badge>
      {children}
      <style.icon count={count}>{count}</style.icon>
    </style.badge>
  )
};

export default Badge;
