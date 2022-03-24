import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryList } from './config';
import { Opendrawer } from './components';
import * as style from './style';

const Menu = () => {
  const [ select, setSelect ] = useState<number>([-1, 0]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const paths = window.location.pathname.split('/').filter(e => e !== '');
    const path = paths[paths.length - 1];
    if (path !== 'react') {
      Object.entries(categoryList).forEach(([key, category], i) => {
        const j = Object.keys(category).findIndex(e => e === path);
        if (j !== -1) setSelect([i, j]);
      })
    }
  }, []);

  useEffect(() => {
    
  }, [ select ])

  return (
    <style.menu>
      <style.menuTitle>Components</style.menuTitle>
      {Object.entries(categoryList).map(([title, category], i) => {
        const config = Object.entries(category).map(([key, conf], j) => ({
          text: conf.name, act: () => {
            setSelect([i, j]);
            navigate(key)
          }
        }))

        return (
          <Opendrawer key={i} title={title} config={config} init={select[0] === i}/>
        );
      })}
    </style.menu>
  );
}

export default Menu;

/*
<Link to={`${key}`} key={i}>
            <style.li
              select={select === i}
              onClick={e => setSelect(i)}
              >
              {conf.name}
            </style.li>
          </Link>
*/
