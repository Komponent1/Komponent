import { createElem } from '../../utils';
import './style.css';

type Prop = {
  elem: HTMLElement
  text: string
  position?: 'left'|'right'|'top'|'bottom'
}
function tip ({ elem, text, position = 'bottom' }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_tip') as HTMLDivElement;
  const background = createElem('div', 'kui_tip_background');
  const tip = createElem('div', 'kui_tip_tip');
  tip.innerText = text;

  switch (position) {
    case 'top':
      tip.style.top = '-200%';
      tip.style.left = '50%';
      tip.style.transform = 'scale(var(--hover)) translateX(-50%)';
      break;
    case 'right':
      tip.style.left = '200%';
      tip.style.top = '50%';
      tip.style.transform = 'scale(var(--hover)) translateY(-50%)';
      break;
    case 'left':
      tip.style.top = '50%';
      tip.style.left = '-100%';
      tip.style.transform = 'scale(var(--hover)) translate(-100%, -50%)';
      break;
    default:
      tip.style.top = '200%';
      tip.style.left = '50%';
      tip.style.transform = 'scale(var(--hover)) translateX(-50%)';
  }

  wrapper.appendChild(background);
  wrapper.appendChild(elem);
  wrapper.append(tip);

  return wrapper;
}

export default tip;
