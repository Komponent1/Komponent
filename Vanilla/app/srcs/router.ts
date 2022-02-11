import { makeDiv } from "./utils";

export const renderer = (name: string, renderFunc: Function, prop: Object, explain: string) => {
  const app = document.getElementById('root');
  app.innerHTML = '';
  app.appendChild(makeDiv(name, explain, renderFunc({ ...prop })));
}

export default (path: string, name: string, render: Function, prop?: Object, explain?: string) => {
  window.history.pushState({}, path, window.location.origin + '/vanilla/' + path);
  renderer(name, render, prop, explain);
};
