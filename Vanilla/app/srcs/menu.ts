import { componentList } from './config';
import router from './router';

const menu = document.getElementById('menu');
Object.entries(componentList).forEach(([key, conf]) => {
  const li = document.createElement('li');
  li.addEventListener('click', () => {
    router(key, conf.name, conf.render);
  });
  li.innerText = conf.name;
  menu.appendChild(li);
});
