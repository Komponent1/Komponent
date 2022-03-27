import './style.css'
import './markdown.css'
import './menu';
import './header';
import home from './home';
import initMenu from './menu';
import router from './router';
import { componentList } from './config';

const app: HTMLElement = document.getElementById("root");
const init = (): void => {
  const path = window.location.pathname.split('/').filter(e => e !== '').pop(); 

  switch(path) {
    case 'vanilla':
      initMenu();
      home(app);
      break;
    case undefined:
      initMenu();
      router('');
      break;
    default:
      const conf = componentList[path];
      initMenu(path);
      router(path, conf.name, conf.render, conf.prop, conf.explain, false);
  }
};

window.onpopstate = () => {
  const path = window.location.pathname.split('/').filter(e => e !== '').pop(); 

  switch(path) {
    case 'vanilla':
      initMenu();
      home(app);
      break;
    case undefined:
      initMenu();
      router('');
      break;
    default:
      const conf = componentList[path];
      initMenu(path);
      router(path, conf.name, conf.render, conf.prop, conf.explain, true);
  }
}

window.onload = init;
