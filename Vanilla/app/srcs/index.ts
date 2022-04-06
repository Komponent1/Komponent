import './style.css'
import './markdown.css'
import './menu';
import './header';
import home from './home';
import initMenu from './menu';
import router from './router';


const app: HTMLElement = document.getElementById("root");
const init = (): void => {
  const path = window.location.pathname

  initMenu(path);
  router(path);

  // switch(paths) {
  //   case 'vanilla':
  //     initMenu();
  //     home(app);
  //     break;
  //   case undefined:
  //     initMenu();
  //     router('');
  //     break;
  //   default:
  //     const conf = componentList[path];
  //     initMenu(path);
  //     router(path, conf.name, conf.render, conf.prop, conf.explain, false);
  // }
};

window.onpopstate = () => {
  const path = window.location.pathname

  initMenu(path);
  router(path, true);

  // switch(path) {
  //   case 'vanilla':
  //     initMenu();
  //     home(app);
  //     break;
  //   case undefined:
  //     initMenu();
  //     router('');
  //     break;
  //   default:
  //     const conf = componentList[path];
  //     initMenu(path);
  //     router(path, conf.name, conf.render, conf.prop, conf.explain, true);
  // }
}

window.onload = init;
