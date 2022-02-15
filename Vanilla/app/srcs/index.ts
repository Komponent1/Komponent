import './style.css'
import './menu';
import './header';
import home from './home';
import router from './router';
import { componentList } from './config';

const app: HTMLElement = document.getElementById("root");
const init = (): void => {
  const path = window.location.pathname.split('/').filter(e => e !== '').pop();

  switch(path) {
    case 'vanilla':
      home(app);
      break;
    case undefined:
      router('');
      break;
    default:
      const conf = componentList[path];
      router(path, conf.name, conf.render, conf.prop, conf.explain);
  }
};
 
window.onload = init;
