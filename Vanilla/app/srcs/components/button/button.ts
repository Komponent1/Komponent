import { createElem } from '../../utils';
import './style.css';

function button ({ text, act }): HTMLDivElement {
  const wrapper = createElem('div', 'button') as HTMLDivElement;
  const wave = createElem('div', 'button_wave');
  
  wrapper.innerText = text;
  wrapper.appendChild(wave);
  
  wrapper.addEventListener('mousedown', e => {
    wave.ontransitionend = () => {};
    
    wave.style.setProperty('--duration', '0.5s');
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

    act(e);
  })

  return wrapper;
};

export default button;
