import { componentList } from './config';
import router from './router';

const menu = document.getElementById('menu');
menu.innerHTML = '<h1>Comp List</h1>';
Object.entries(componentList).forEach(([key, conf]) => {
  const li = document.createElement('li');
  li.addEventListener('click', () => {
    router(key, conf.name, conf.render, conf.prop, conf.explain);
  });
  li.innerText = conf.name;
  menu.appendChild(li);
});
