import home from "./home";
import { makeDiv } from "./utils";
import { componentList } from './config';

export const componentRenderer = (name: string, renderFunc: Function, prop: Object, explain: string, app: HTMLDivElement) => {
  app.innerHTML = '';
  app.appendChild(makeDiv(name, explain, renderFunc({ ...prop })));
  window.scrollTo(0, 0);
}

export default (path: string, isback?: boolean) => {
  const paths = path.split('/').filter(e => e !== '');
  const app = document.getElementById('root') as HTMLDivElement;

  if (!isback) window.history.pushState({}, path, window.location.origin + path);
  if (paths.length === 1) home(app);
  else if (paths.length > 1) {
    if (paths[1] === 'component') {
      const conf = componentList[paths[2]]
      componentRenderer(conf.name, conf.render, conf.prop, conf.explain, app);
    }
  } else home(app);
};
