import home from "./home";
import { makeDiv } from "./utils";

export const renderer = (name: string, renderFunc: Function, prop: Object, explain: string, app: HTMLDivElement, path: string) => {
  app.innerHTML = '';
  app.appendChild(makeDiv(name, explain, renderFunc({ ...prop })));
  window.scrollTo(0, 0);

  const menu = document.getElementById('menu');
  Array.from(menu.getElementsByClassName('kui_opendrawer_ul')).forEach(ul => {
    if (Array.from(ul.children).some(e => e.textContent === path)) {
      (ul as HTMLElement).style.setProperty('--height', '10rem');
    } else {
      (ul as HTMLElement).style.setProperty('--height', '0');
    }
  })

  Array.from(document.getElementsByClassName('menu_li')).forEach(e => {
    if (e.textContent !== path) e.classList.remove('select')
    else {
      e.classList.add('select');
    }
  })
}

export default (path: string, name?: string, render?: Function, prop?: Object, explain?: string) => {
  const app = document.getElementById('root') as HTMLDivElement;

  window.history.pushState({}, path, window.location.origin + '/vanilla/' + path);
  if (name) renderer(name, render, prop, explain, app, path);
  else home(app);
};
