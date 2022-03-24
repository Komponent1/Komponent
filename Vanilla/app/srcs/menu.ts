import { categoryList } from './config';
import { CONFIG } from './config/configType';
import router from './router';
import { opendrawer } from './components';

const menu = document.getElementById('menu');
menu.innerHTML = '<h2>Components</h2>';
type tComp = {
  [key in string]: CONFIG  
} 
function makeCategory (title: string, list: tComp, init) {
  const config = Object.entries(list).map(([key, conf]) => ({
    text: key,
    act: (event: MouseEvent) => {
      router(key, conf.name, conf.render, conf.prop, conf.explain);
    }
  }));

  const Opendrawer = opendrawer({title, config, init});
  menu.appendChild(Opendrawer);
}
Object.entries(categoryList).forEach(([key, conf]) => makeCategory(key, conf, false));
Array.from(document.getElementById('menu').getElementsByClassName('kui_opendrawer_li')).forEach(e => e.classList.add('menu_li'));
