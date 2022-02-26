import { createElem } from "../../utils";
import './style.css';

type Prop = {
  init?: boolean,
  setChecked: (check: boolean) => any | void
}
function checkbox ({ init = false, setChecked }: Prop): HTMLDivElement {
  let checked = init;

  const wrapper = createElem('div', 'kui_checkbox') as HTMLDivElement;
  const box = createElem('div', 'kui_checkbox_outline');
  box.innerText = 'V';
  const background = createElem('div', 'kui_checkbox_background');
  const wave = createElem('div', 'kui_checkbox_wave');

  wrapper.addEventListener('mousedown', e => {
    wave.style.setProperty('--duration', '0.3s');
    wave.style.opacity = '1';
    wave.style.setProperty('--scale', '1');
  });
  wrapper.addEventListener('mouseup', e => {
    e.stopPropagation();
    checked = !checked;
    setChecked(checked);
    if (checked) {
      box.style.background = '#252553';
      box.style.border = '2px solid #252553';
    } else {
      box.style.background = 'white';
      box.style.border = '2px solid rgba(0, 0, 0, 0.5)';
    }
    wave.style.setProperty('--duration', '0s');
    wave.style.opacity = '0';
    wave.style.setProperty('--scale', '0');
  });
  wrapper.appendChild(box);
  wrapper.appendChild(wave);
  wrapper.appendChild(background);
  
  return wrapper;
};

export default checkbox