import './style.css'
import { createElem } from '../../utils'

type Prop = {
  type: string
}
function loadingline(): HTMLDivElement {
  const loader = createElem('div', 'kui_loading_lines') as HTMLDivElement;

  for(let i = 0; i < 3; i++) {
    const line = createElem('div', 'kui_loading_line');
    line.style.setProperty('--delay', i * 0.2 + 's')
    loader.appendChild(line);
  }

  return loader;
}

function loading({ type = 'linearspin' }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_loading') as HTMLDivElement;
  let loader = null;
  if (type.search('spin') !== -1) {
    loader = createElem('div', 'kui_loading_circle');
    loader.classList.add(type);
  } else {
    loader = loadingline();
  }
  
  wrapper.appendChild(loader);

  return wrapper;
};

export default loading;
