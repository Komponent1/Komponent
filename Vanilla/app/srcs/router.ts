import { makeDiv } from "./utils";

export const renderer = (name: string, renderFunc: Function) => {
  const app = document.getElementById('root');
  app.innerHTML = '';
  app.appendChild(makeDiv(name ,renderFunc()));
  
}

export default (path: string, name: string, render: Function) => {
  window.history.pushState({}, path, window.location.origin + '/vanilla/' + path);
  renderer(name, render);
};
