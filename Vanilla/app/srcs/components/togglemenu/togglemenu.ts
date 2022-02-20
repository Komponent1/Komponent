import './style.css';
import { createElem } from '../../utils';

type Config = {
  type: string
  src: string | HTMLElement,
  
  act: Function
};
type Prop = {
  config: Config[]
};
function togglemenu ({ config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'togglemenu') as HTMLDivElement;

  const icons = config.map((e, i) => {
    const icon = createElem('div', 'togglemenu_icon');

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
    
    if (i === config.length - 1) icon.style.borderRight = 'none';
    wrapper.appendChild(icon);

    return icon;
  })
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', e => {
      config[i].act();
      icons.forEach(icon => {
        if (icon !== e.target) icon.classList.remove('select');
        else icon.classList.add('select');
      });
    });
  }
  
  return wrapper;
};

export default togglemenu;
