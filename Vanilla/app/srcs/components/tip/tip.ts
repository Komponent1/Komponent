import { createElem } from '../../utils';
import './style.css';

type Prop = {
  elem: HTMLElement
  text: string
}
function tip ({ elem, text }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_tip') as HTMLDivElement;
  const background = createElem('div', 'kui_tip_background');
  const tip = createElem('div', 'kui_tip_tip');
  tip.innerText = text;

  wrapper.appendChild(background);
  wrapper.appendChild(elem);
  wrapper.append(tip);

  return wrapper;
}

export default tip;
