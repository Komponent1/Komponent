import './style.css';
import { createElem } from '../../utils';

function dropdown({ tag, options, setOtion }) {
  const wrapper = createElem('div', 'dropdown');
  const box = createElem('div', 'dropdown_box');
  const menu = createElem('div', 'dropdown_menu');
  wrapper.appendChild(box);
  box.innerText = tag;
  wrapper.appendChild(menu);
  for (let i = 0; i < options.length; i++) {
    const item = createElem('div', 'dropdown_item');
    item.innerText = options[i];
    if (i === 0) item.style.borderTop = '4px';
    else if (i === options.length - 1) item.style.borderBottom = '4px';

    item.addEventListener('click', e => {
      e.stopPropagation();
      box.innerText = options[i];
      box.classList.remove('active');
      menu.style.display = 'none';
    })
    menu.appendChild(item);
  }

  box.addEventListener('click', () => {
    box.classList.add('active');
    menu.style.display = 'block';
  })
  window.addEventListener('click', e => {
    if (!(e.target as HTMLDivElement).closest('.dropdown')) {
      box.classList.remove('active');
      menu.style.display = 'none';
    }

  })

  return wrapper;
};

export default dropdown;
