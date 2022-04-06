import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { allList, categoryList, componentList, hookList } from './config';
import { Multiopendrawer} from './components';
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
    const lis = Array.from(ref.current.getElementsByClassName('kui_multiopendrawer_li')) as HTMLElement[];
    lis.forEach(li => {
      if (Object.keys(categoryList).findIndex(e => e === li.textContent) !== -1) li.classList.add('title');
    })
    
  }, [ ref ]);
  useEffect(() => {
    if (!ref) return;
    const lis = Array.from(ref.current.getElementsByClassName('kui_multiopendrawer_li')) as HTMLElement[];
    if (path !== 'react') {
      const [_, cat, item] = paths;
      lis.forEach(li => {
        if (li.textContent === allList[cat][item].name) li.classList.add('select');
        else li.classList.remove('select');
      });
    }
  }, [ path ]);

  const singleConfig = (list: any, path: string) => Object.entries(list).map(([link, conf]: [string, any]) => ({
    text: conf.name,
    act: () => navigate(`${path}/${link}`),
  }))

  const compnentConfig = () => {
    let config = [];
    const category = Object.keys(categoryList);

    for(let key of category) {
      config.push({
        text: key,
        act: () => {},
      }, ...singleConfig(categoryList[key], 'component'));
    }
    return config;
  }
  const hookConfig =  singleConfig(hookList, 'hook');

  const config = [
    {
      title: 'Component',
      list: compnentConfig(),
    },
    {
      title: 'Hook',
      list: hookConfig
    }
  ]

  return (
    <style.menu ref={ref}>
      <Multiopendrawer config={config} init={idx}/>
    </style.menu>
  );
}

export default Menu;
