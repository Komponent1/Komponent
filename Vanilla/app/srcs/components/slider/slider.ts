import './style.css';
import { createElem } from '../../utils';

type Prop = {
  width?: number,
  init?: number,
  setValue: (val: number) => void|any
}
function slider ({ setValue, width = 100, init = 0 }: Prop) {
  const wrapper = createElem('div', 'kui_slider');
  width ? wrapper.style.setProperty('--width', width + 'px') : null;
  const up = createElem('div', 'kui_slider_up');
  const down = createElem('div', 'kui_slider_down');
  wrapper.appendChild(up);
  wrapper.appendChild(down);
  const marker = createElem('div', 'kui_slider_marker');
  wrapper.appendChild(marker);
  let value = 0;
  
  const setPos = (val: number) => {
    value = val;
    setValue(value);
    marker.style.setProperty('--value', value * width + 'px');
    up.style.setProperty('--scale', (value * 100) + '%' )
    down.style.setProperty('--scale', ((1 - value) * 100) + '%' )
  }
  setPos(init);

  const drag = (e: MouseEvent) => {
    const slider = document.getElementsByClassName('kui_slider')[0]
    const point = e.clientX - (slider as HTMLDivElement).offsetLeft;
    if (point > width || point < 0) {
      return;
    }
    setPos(point / width);
  }
  
  marker.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', drag);
  });
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', drag);
  })

  return wrapper;
}

export default slider;
