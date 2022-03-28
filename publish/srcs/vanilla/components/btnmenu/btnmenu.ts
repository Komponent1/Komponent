import './style.css';
import { createElem } from '../../utils';

type Prop = {
  title?: string | HTMLElement
  config: {
    name: string,
    act: () => {}
  }[]
}
function btnmenu({ title = '=', config }: Prop):HTMLDivElement {
  const wrapper = createElem('div', 'kui_btnmenu') as HTMLDivElement;
  const btn = createElem('div', 'kui_btnmenu_btn');
  const ul = createElem('div', 'kui_btnmenu_ul');

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
  
  if (typeof(title) === 'string') btn.innerText = title;
  else btn.appendChild(title);
  wrapper.appendChild(btn);
  wrapper.appendChild(ul);
  for(let i = 0; i < config.length; i++) {
    const li = createElem('div', 'kui_btnmenu_li');
    li.addEventListener('click', e => {
      e.stopPropagation();
      config[i].act();
      off();
    });
    li.innerText = config[i].name
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
