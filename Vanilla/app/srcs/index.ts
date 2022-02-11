import './style.css'
import './menu';
import router from './router';
import { componentList } from './config';

const app: HTMLElement = document.getElementById("root");
const main = (app: HTMLElement) => {
  app.innerHTML = '<h1>Main</h1>'
};
const init = (): void => {
  const path = window.location.pathname.split('/').filter(e => e !== '').pop();

  switch(path) {
    case 'vanilla':
      main(app);
      break;
    default:
      const conf = componentList[path];
      router(path, conf.name, conf.render, conf.prop, conf.explain);
  }
};
 
window.onload = init;
