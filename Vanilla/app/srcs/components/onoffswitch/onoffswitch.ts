import './style.css';
import { createElem } from '../../utils';

function onoffswitch ({ setValue }: { setValue: (on: boolean) => void }): HTMLDivElement {
  const wrapper = createElem('div', 'onoffswitch') as HTMLDivElement;
  const icon = createElem('div', 'onoffswitch_icon');
  const leftbar = createElem('div', 'onoffswitch_leftbar');
  const rightbar = createElem('div', 'onoffswitch_rightbar');
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
