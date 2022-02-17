import { createElem } from '../../utils';
import './style.css';

function dragable (pannel: HTMLElement): HTMLDivElement {
  const item = createElem('div', 'dragable') as HTMLDivElement;
  
  const move = (offsetX: number, offsetY: number) => {
    return (e: MouseEvent) => {
      const x = e.pageX - pannel.offsetLeft - offsetX - 1;
      const y = e.pageY - pannel.offsetTop - offsetY - 1;
    
      item.style.setProperty('--x', x + 'px');
      item.style.setProperty('--y', y + 'px');
    }
  }
  
  let id = null;
  pannel.addEventListener('mousedown', e => {
    if (id !== null || (e.target as HTMLElement).closest('.dragable') !== item) return;
    id = move(e.offsetX, e.offsetY);
    pannel.addEventListener('mousemove', id);
  })
  pannel.addEventListener('mouseup', e => {
    e.stopPropagation();
    if (id === null) return;
    pannel.removeEventListener('mousemove', id);
    id = null;
  })
  pannel.addEventListener('mouseleave', e => {
    e.stopPropagation();
    if (id === null) return;
    pannel.removeEventListener('mousemove', id);
    id = null;
  });

  return item;
};

function dragablepannel ({ elems }): HTMLDivElement {
  const wrapper = createElem('div', 'dragablepannel') as HTMLDivElement;
  
  for (let i = 0; i < elems.length; i++) {
    const item = dragable(wrapper);
    item.appendChild(elems[i]);
    wrapper.appendChild(item);
  }

  return wrapper;
};

export default dragablepannel;
