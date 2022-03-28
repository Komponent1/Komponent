import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ComponentList } from './config';
import * as style from './style';

const Menu = () => {
  const [ select, setSelect ] = useState<number>(-1);
  
  useEffect(() => {
    const paths = window.location.pathname.split('/').filter(e => e !== '');
    const path = paths[paths.length - 1];
    if (path !== 'react') {
      setSelect(Object.entries(ComponentList).findIndex(([key, _]) => key === path))
    }
  }, []);

  return (
    <style.menu>
      <style.menuTitle>Compoenets</style.menuTitle>
      {Object.entries(ComponentList).map(([key, conf], i) => (
        <Link to={`${key}`} key={i}>
          <style.li
            select={select === i}
            onClick={e => setSelect(i)}
            >
            {conf.name}
          </style.li>
        </Link>
      ))}
    </style.menu>
  );
}

export default Menu;
