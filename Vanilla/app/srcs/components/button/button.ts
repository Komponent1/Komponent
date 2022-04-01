import { createElem } from '../../utils';
import './style.css';

type Prop = {
  text: string,
  click: (e: MouseEvent) => void
}
function button ({ text = '', click = e => {} }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_button') as HTMLDivElement;
  const wave = createElem('div', 'kui_button_wave');
  
  wrapper.innerText = text;
  wrapper.appendChild(wave);
  
  wrapper.addEventListener('mousedown', e => {
    wave.ontransitionend = () => {};
    
    wave.style.setProperty('--duration', '0.3s');
    wave.style.opacity = '1';
    wave.style.top = (e.clientY - wrapper.offsetTop - 100) + 'px';
    wave.style.left = (e.clientX - wrapper.offsetLeft - 100) + 'px';
    wave.style.setProperty('--scale', '1');
  });
  wrapper.addEventListener('mouseup', e => {
    wave.style.opacity = '0';
    wave.ontransitionend = () => {
      wave.style.setProperty('--duration', '0s');
      wave.style.setProperty('--scale', '0');
    }

    click(e);
  })

  return wrapper;
};

export default button;
