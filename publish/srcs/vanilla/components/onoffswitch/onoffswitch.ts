import './style.css';
import { createElem } from '../../utils';

type Prop = {
  setValue: (on: boolean) => void|any
}
function onoffswitch ({ setValue }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_onoffswitch') as HTMLDivElement;
  const icon = createElem('div', 'kui_onoffswitch_icon');
  const leftbar = createElem('div', 'kui_onoffswitch_leftbar');
  const rightbar = createElem('div', 'kui_onoffswitch_rightbar');
  wrapper.appendChild(icon);
  wrapper.appendChild(leftbar);
  wrapper.appendChild(rightbar);

  let on = false;

  wrapper.addEventListener('mouseup', e => {
    on = !on;
    setValue(on);
    if (on) {
      icon.style.setProperty('--x', '110%');
      leftbar.style.setProperty('--width', '100%');
      rightbar.style.setProperty('--width', '0%');
    } else {
      icon.style.setProperty('--x', '-10%');
      leftbar.style.setProperty('--width', '0%');
      rightbar.style.setProperty('--width', '100%');
    }
  });

  return wrapper;
};

export default onoffswitch;
