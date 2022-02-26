import './style.css';
import { createElem } from '../../utils';

type Config = {
  type: string
  src: string | HTMLElement,
  
  act: Function
};
type Prop = {
  init?: number,
  type: 'normal'|'must'|'multi',
  config: Config[]
};
function togglemenu ({ init, type = 'normal', config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_togglemenu') as HTMLDivElement;

  const icons = config.map((e, i) => {
    const icon = createElem('div', 'kui_togglemenu_icon');

    switch (config[i].type) {
      case 'text':
        icon.innerText = e.src as string;
        break;
      case 'img':
        icon.innerHTML = `<img src=${e.src as string} />`
        break;
      case 'elem':
        icon.appendChild(e.src as HTMLElement);
    }
    if (init !== undefined && init === i) icon.classList.add('select');
    if (i === config.length - 1) icon.style.borderRight = 'none';
    wrapper.appendChild(icon);

    return icon;
  })
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', e => {
      config[i].act();
      icons.forEach((icon, j) => {
        if (i !== j) {
          if (type !== 'multi') icon.classList.remove('select');
        } else {
          if (icon.classList.contains('select') && type !== 'must') {
            icon.classList.remove('select');
          } else {
            icon.classList.add('select');
          }
        }
      });
    });
  }
  
  return wrapper;
};

export default togglemenu;
