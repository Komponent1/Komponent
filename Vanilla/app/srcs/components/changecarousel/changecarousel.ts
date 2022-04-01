import './changecarousel.css'
import { createElem } from '../../utils'; 

type Prop = {
  width?: string,
  height?: string,
  elems: HTMLDivElement[],
  auto: boolean
}
function changeCarousel({ elems, auto = true, width = '100%', height = '100%' }: Prop): HTMLDivElement {
  let idx = 0;
  let isChanged = false;
  let id = null;

  const wrapper = createElem('div', 'kui_changecarousel') as HTMLDivElement;
  wrapper.style.width = width;
  wrapper.style.height = height;
  const btnset = createElem('div', 'kui_changecarousel_btnset');
  let btns = [];

  const init = () => {
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.add('kui_changecarousel_item');
      elems[i].ontransitionend = e => {
        isChanged = false;
      }
      let button = document.createElement('button');
      button.innerHTML = `
        <div></div>
      `
      if (i === 0) {
        button.children[0].classList.add('select');
        elems[i].style.opacity = '1';
      }
      wrapper.appendChild(elems[i]);
      btnset.appendChild(button);
      btns.push(button);
    }
    wrapper.appendChild(btnset);
  }
  const change = (i: number) => {
    isChanged = true;
    btns.forEach((e, j) => {
      if (i === j) e.children[0].classList.add('select');
      else e.children[0].classList.remove('select');
    });
    elems[idx].style.opacity = '0';
    idx = i;
    elems[idx].style.opacity = '1';
  }
  const setAuto = () => {
    id = setInterval(() => {
      if (idx < elems.length - 1) change(idx + 1)
      else change(0);
    }, 3000);
  }
  init();

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      if (id) clearInterval(id);
      change(i);
      if (auto) setAuto();
    });
  }

  if (auto) {
    setAuto();
  }

  return wrapper;
}

export default changeCarousel;
