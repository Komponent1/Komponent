import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryList, componentList } from './config';
import { Multiopendrawer } from './components';
import * as style from './style';

const Menu = () => {
  const ref = useRef<React.Ref>(null);
  const navigate = useNavigate();
  const paths = window.location.pathname.split('/').filter(e => e !== '');
  const path = paths[paths.length - 1];
  const idx = path !== 'react' ? Object.entries(categoryList).findIndex(([key, category]) => 
     Object.keys(category).findIndex(e => e === path) !== -1
  ) : -1;

  useEffect(() => {
    if (!ref) return;
    if (path !== 'react') {
      ref.current.getElementsByClassName('kui_multiopendrawer_li')[
        Object.keys(componentList).findIndex(e => e === path)
      ].classList.add('select');
    }
  }, [ ref ]);
  
  const config = Object.entries(categoryList).map(([title, category]) => ({
    title,
    list: Object.entries(category).map(([key, conf]) => ({
      text: conf.name,
      act: (e, value) => {        
        const lis = e.target.closest('.kui_multiopendrawer').getElementsByClassName('kui_multiopendrawer_li') as HTMLCollection;
        Array.from(lis).map(li => {
          if (li === e.target) li.classList.add('select');
          else li.classList.remove('select');
        })
        navigate(key);
      }
    }))
  }));

  return (
    <style.menu ref={ref}>
      <style.menuTitle>Components</style.menuTitle>
      <Multiopendrawer config={config} init={idx}/>
    </style.menu>
  );
}

export default Menu;
