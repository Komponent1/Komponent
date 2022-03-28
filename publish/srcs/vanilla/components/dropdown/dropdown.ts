import './style.css';
import { createElem } from '../../utils';

type Prop = {
  tag: string,
  options: string[],
  setOption: (option: string, idx?: number) => void|any
}
function dropdown({ tag, options, setOption }: Prop) {
  const wrapper = createElem('div', 'kui_dropdown');
  const box = createElem('div', 'kui_dropdown_box');
  const menu = createElem('div', 'kui_dropdown_menu');
  wrapper.appendChild(box);
  box.innerText = tag;
  wrapper.appendChild(menu);
  for (let i = 0; i < options.length; i++) {
    const item = createElem('div', 'kui_dropdown_item');
    item.innerText = options[i];

    item.addEventListener('click', e => {
      e.stopPropagation();
      box.innerText = options[i];
      box.classList.remove('active');
      menu.style.display = 'none';
      box.style.color = 'black';
      setOption(options[i], i);
    })
    menu.appendChild(item);
  }

  box.addEventListener('click', () => {
    box.classList.add('active');
    menu.style.display = 'block';
  })
  window.addEventListener('click', e => {
    if (!(e.target as HTMLDivElement).closest('.kui_dropdown')) {
      box.classList.remove('active');
      menu.style.display = 'none';
    }
  })

  return wrapper;
};

export default dropdown;
