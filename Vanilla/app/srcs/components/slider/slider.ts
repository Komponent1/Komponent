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
    const point = e.clientX - ((e.target as HTMLElement).closest('.slider') as HTMLElement).offsetLeft;
    if (point > width || point < 0) {
      return;
    }
    value = point;
    setValue(value);
    marker.style.setProperty('--value', point + 'px');
    up.style.setProperty('--scale', ((value / width) * 2) + '' )
    down.style.setProperty('--scale', (2 - (value / width) * 2) + '' )
  }
  
  marker.addEventListener('mousedown', () => {
    wrapper.addEventListener('mousemove', drag);
  });
  marker.addEventListener('mouseleave', e => {
    wrapper.removeEventListener('mousemove', drag);
  })
  marker.addEventListener('mouseup', () => {
    wrapper.removeEventListener('mousemove', drag);
  })

  return wrapper;
}

export default slider;
