import './slidecarousel.css';
import { createElem } from '../../utils';

type Prop = {
  elems: HTMLDivElement[],
  auto: boolean
}
function carousel({ elems, auto = false }: Prop): HTMLDivElement {
  let idx = 1;
  let isTransitioned = false;
  let id = null;

  const wrapper = createElem('div', 'kui_slidecarousel') as HTMLDivElement
  const slider = createElem('div', 'kui_slidecarousel_slider');
  const items = [
    elems[elems.length - 1].cloneNode(true) as HTMLElement,
     ...elems,
     elems[0].cloneNode(true) as HTMLElement
  ];
  wrapper.appendChild(slider);

  const move = (idx: number, sec: number): void => {
    if (sec !== 0)isTransitioned = true;
    slider.style.setProperty('--x', (idx * -400) + 'px');
    slider.style.setProperty('--sec', sec + 's');
  }
  const init = () => {
    for (let i = 0; i < items.length; i++) {
      let itemWrap = createElem('div', 'kui_slidecarousel_item');
      itemWrap.appendChild(items[i]);
      slider.appendChild(itemWrap);
    }
    const rButton = document.createElement('button');
    rButton.classList.add('kui_slidecarousel_rbutton');
    rButton.innerText = '>>';
    const lButton = document.createElement('button');
    lButton.classList.add('kui_slidecarousel_lbutton');
    lButton.innerText = '<<';
    wrapper.appendChild(rButton);
    wrapper.appendChild(lButton);

    rButton.addEventListener('click', () => {
      if (isTransitioned) return ;
      if (id) clearInterval(id);
      move(++idx, 0.5);
      if (auto) setAuto();
    });
    lButton.addEventListener('click', () => {
      if (isTransitioned) return ;
      if (id) clearInterval(id);
      move(--idx, 0.5);
      if (auto) setAuto();
    });
  }
  const setAuto = () => {
    id = setInterval(() => {
      move(++idx, 0.5);
    }, 3000);
  }

  slider.ontransitionend = () => {
    isTransitioned = false;
    if (idx === 0) {
      idx = items.length - 2;
      move(idx, 0);
    } else if (idx === items.length - 1) {
      idx = 1;
      move(idx, 0);
    }
  }

  init();
  if (auto) setAuto();
  
  return wrapper;
};

export default carousel;
