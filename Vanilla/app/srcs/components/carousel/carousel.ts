import './carousel.css';
import { createElem } from '../../utils';

type Prop = {
  elems: HTMLDivElement[]
}
function carousel({ elems }: Prop): HTMLDivElement {
  let idx = 1;
  let isTransitioned = false;

  const wrapper = createElem('div', 'carousel') as HTMLDivElement
  const slider = document.createElement('div');
  slider.classList.add('carousel_slider');
  wrapper.appendChild(slider);
  const items = [
    elems[elems.length - 1].cloneNode(true) as HTMLElement,
     ...elems,
     elems[0].cloneNode(true) as HTMLElement
  ];
  for (let i = 0; i < items.length; i++) {
    let itemWrap = createElem('div', 'carousel_item');
    itemWrap.appendChild(items[i]);
    slider.appendChild(itemWrap);
  }
  const rButton = document.createElement('button');
  rButton.classList.add('carousel_rbutton');
  rButton.innerText = '>>';
  const lButton = document.createElement('button');
  lButton.classList.add('carousel_lbutton');
  lButton.innerText = '<<';
  wrapper.appendChild(rButton);
  wrapper.appendChild(lButton);

  const move = (idx: number, sec: number): void => {
    if (sec !== 0)isTransitioned = true;
    slider.style.setProperty('--idx', idx + '');
    slider.style.setProperty('--sec', sec + '');
  }

  rButton.addEventListener('click', () => {
    if (isTransitioned) return ;
    move(++idx, 0.5);
  });
  lButton.addEventListener('click', () => {
    if (isTransitioned) return ;
    move(--idx, 0.5)
  });

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

  return wrapper;
};

export default carousel;
