import home from "./home";
import { makeDiv } from "./utils";

export const renderer = (name: string, renderFunc: Function, prop: Object, explain: string, app: HTMLDivElement) => {
  app.innerHTML = '';
  app.appendChild(makeDiv(name, explain, renderFunc({ ...prop })));
}

export default (path: string, name?: string, render?: Function, prop?: Object, explain?: string) => {
  const app = document.getElementById('root') as HTMLDivElement;

  window.history.pushState({}, path, window.location.origin + '/vanilla/' + path);
  if (name) renderer(name, render, prop, explain, app);
  else home(app);
};
