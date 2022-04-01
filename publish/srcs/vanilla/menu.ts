import { categoryList, componentList } from './config';
import router from './router';
import { multiopendrawer } from './components';

const initMenu = (path?: string) => {
  const menu = document.getElementById('menu');
  menu.innerHTML = '<h2>Components</h2>';
  const config = Object.entries(categoryList).map(([title, conf]) => ({
    title,
    list: Object.entries(conf).map(([key, li]) => ({
      text: li.name,
      act: () => router(key, li.name, li.render, li.prop, li.explain),
    })) 
  }));
  menu.appendChild(multiopendrawer({
    config,
    init: !path ? 0 :
    Object.entries(categoryList).findIndex(([title, conf]) => (
      Object.keys(conf).some(li => li === path)
    ))
  }))
  const list = Array.from(document.getElementById('menu').getElementsByClassName('kui_opendrawer_li'));

  const id = Object.keys(componentList).findIndex(e => e === path);

  list.forEach((li, i) => {
    if (i === id) li.classList.add('select');
    li.addEventListener('click', event => {
      list.forEach(e => {
        if (event.target === e) e.classList.add('select');
        else e.classList.remove('select');
      })
    })
  })
}

export default initMenu;
