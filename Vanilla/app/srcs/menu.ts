import { componentList } from './config';
import router from './router';

const menu = document.getElementById('menu');
menu.innerHTML = '<h2>Components</h2>';
Object.entries(componentList).forEach(([key, conf]) => {
  const li = document.createElement('li');
  li.innerText = conf.name;
  li.addEventListener('click', () => {
    router(key, conf.name, conf.render, conf.prop, conf.explain);
    Array.from(menu.children).forEach(e => {
      if (e === li) e.classList.add('select');
      else  e.classList.remove('select');
    })
  });
  menu.appendChild(li);
  
  return li;
});

