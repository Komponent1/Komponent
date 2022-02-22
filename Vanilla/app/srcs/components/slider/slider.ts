import './style.css';
import { createElem } from '../../utils';

function slider ({ setValue, width }) {
  const wrapper = createElem('div', 'slider');
  width ? wrapper.style.setProperty('--width', width + 'px') : null;
  const up = createElem('div', 'slider_up');
  const down = createElem('div', 'slider_down');
  wrapper.appendChild(up);
  wrapper.appendChild(down);
  const marker = createElem('div', 'slider_marker');
  wrapper.appendChild(marker);

  let value = 0;
  const drag = (e: MouseEvent) => {
    const slider = document.getElementsByClassName('slider')[0]
    const point = e.clientX - (slider as HTMLDivElement).offsetLeft;
    if (point > width || point < 0) {
      return;
    }
    value = point;
    setValue(value);
    marker.style.setProperty('--value', point + 'px');
    up.style.setProperty('--scale', ((value / width) * 100) + '%' )
    down.style.setProperty('--scale', (((width - value) / width) * 100) + '%' )
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
