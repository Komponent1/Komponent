import { categoryList, componentList, allList } from './config';
import router from './router';
import { multiopendrawer } from './components';

const initMenu = (path: string) => {
  const paths = path.split('/').filter(e => e !== '');
  const menu = document.getElementById('menu');
  const singleConfig = (list: any, path: string) => Object.entries(list).map(([link, conf]: [string, any]) => ({
    text: conf.name,
    act: () => router(`/vanilla/${path}/${link}`),
  }));
  const componentConfig = () => {
    let config = [];
    const category = Object.keys(categoryList);

    for (let key of category) {
      config.push({
        text: key,
        act: () => {},
      }, ...singleConfig(categoryList[key], 'component'))
    }

    return config;
  }

  const config = [{
    title: 'Component',
    list: componentConfig(),
  }]
  menu.appendChild(multiopendrawer({
    config,
    init: paths.length === 1 ? -1 : Object.keys(allList).findIndex(e => e === paths[1]),
  }))
  const lis = Array.from(document.getElementById('menu').getElementsByClassName('kui_opendrawer_li'));
  lis.forEach(li => {
    if (Object.keys(categoryList).findIndex(e => e === li.textContent) !== -1) li.classList.add('title');
  })

  lis.forEach((li) => {
    if (paths.length > 1) {
      try {
        if (li.textContent === allList[paths[1]][paths[2]].name) li.classList.add('select');
      } catch (err) {
        router('/vanilla');
      }
    }
    li.addEventListener('click', event => {
      lis.forEach(e => {
        if (event.target === e) e.classList.add('select');
        else e.classList.remove('select');
      })
    })
  })
}

export default initMenu;
