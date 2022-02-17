import { createElem } from '../../utils';
import './style.css';

function move (e: MouseEvent, parent: HTMLElement, elem: HTMLElement, fix?: number) {
  /* */
  console.log('work?');
  const x = e.pageX - parent.offsetLeft - e.offsetX - fix;
  const y = e.pageY - parent.offsetTop - e.offsetY - fix;

  elem.style.setProperty('--x', x + 'px');
  elem.style.setProperty('--y', y + 'px');
}

function dragablepannel (): HTMLDivElement {
  const wrapper = createElem('div', 'dragablepannel') as HTMLDivElement;
  
  const item = createElem('div', 'dragable');
  item.addEventListener('mousedown', e => {
    item.addEventListener('mousemove', e => move(e, wrapper, item, 1));
  })
  item.addEventListener('mouseup', e => {
    item.removeEventListener('mousemove', e => move(e, wrapper, item, 1));
  })
  wrapper.appendChild(item);

  return wrapper;
};

export default dragablepannel;
