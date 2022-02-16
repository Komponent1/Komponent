import './style.css';
import { createElem } from '../../utils';

function btnmenu({ menus }):HTMLDivElement {
  const wrapper = createElem('div', 'btnmenu') as HTMLDivElement;
  const btn = createElem('div', 'btnmenu_btn');
  const ul = createElem('div', 'btnmenu_ul');

  const on = () => {
    ul.style.display = 'block';
    btn.style.setProperty('--color', '#2552E5');
  }
  const off = () => {
    ul.style.display = 'none';
    btn.style.setProperty('--color', 'rgba(0,0,0,0)');
  }

  btn.addEventListener('click', e => {
    e.stopPropagation();
    ul.style.display === 'block' ? off() : on();
  })
  btn.innerText = '=';
  
  wrapper.appendChild(btn);
  wrapper.appendChild(ul);
  for(let i = 0; i < menus.length; i++) {
    const li = createElem('div', 'btnmenu_li');
    li.addEventListener('click', e => {
      e.stopPropagation();
      menus[i].act();
      off();
    });
    li.innerText = menus[i].name
    ul.appendChild(li);
  }

  window.addEventListener('click', e => {
    e.stopPropagation();
    if (e.target === wrapper) return;
    off();
  })
  
  return wrapper;
};

export default btnmenu;
