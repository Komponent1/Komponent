import './style.css';
import { createElem } from '../../utils';
import { tip } from '../';

type Prop = {
  config: {
    icon: string
    type: 'img'|'text',
    tip?: string,
    act: Function;
  }[]
}
function floatdial ({ config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_floatdial') as HTMLDivElement;
  const button = createElem('div', 'kui_floatdial_button');
  button.innerText = '+'
  const list = createElem('div', 'kui_floatdial_list');

  config.forEach((item, i) => {
    const li = createElem('div', 'kui_floatdial_item');
    switch(item.type) {
      case 'img':
        li.innerHTML = `<img src=${item.icon}/>`
        break;
      case 'text':
        li.innerText = item.icon;
    }
    li.addEventListener('click', () => item.act());
    if (i === config.length - 1) {
      li.ontransitionend = () => {
        if (wrapper.style.getPropertyValue('--scale') === '0') {
          wrapper.style.setProperty('--display', 'none');
          Array.from(list.children).forEach(item => {
            item.classList.remove('anim');
          })
        }
      }
    }

    if (item.tip) {
      list.appendChild(tip({ elem: li, text: item.tip, position: 'left' }));
    } else {
      list.appendChild(li);
    }
  });

  wrapper.addEventListener('mouseover', () => {
    wrapper.style.setProperty('--display', 'block');
    wrapper.style.setProperty('--scale', '1');
    Array.from(list.children).forEach(item => {
      item.classList.add('anim');
    })
  })
  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.setProperty('--scale', '0');
  });

  wrapper.appendChild(button);
  wrapper.appendChild(list);


  return wrapper;
};

export default floatdial;