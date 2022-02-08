import './carousel.css';

export function makeDummyElem(): HTMLElement[] {
  const colors = [ 'red', 'blue', 'grey', 'yellow'];

  const elems = colors.map(e => {
    const elem = document.createElement('div');
    elem.style.backgroundColor = e;

    return elem;
  })
  return elems
}

function carousel(elems: HTMLElement[]): HTMLDivElement {
  let idx = 1;
  let isTransitioned = false;

  const wrapper = document.createElement('div');
  wrapper.classList.add('carousel_wrapper');
  const slider = document.createElement('div');
  slider.classList.add('carousel_slider');
  wrapper.appendChild(slider);
  const items = [
    elems[elems.length - 1].cloneNode(true) as HTMLElement,
     ...elems,
     elems[0].cloneNode(true) as HTMLElement
  ];
  for (let i = 0; i < items.length; i++) {
    items[i].classList.add('carousel_item');
    slider.appendChild(items[i]);
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
    slider.style.setProperty('--sec', sec + '');
    slider.style.setProperty('--idx', idx + '');
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
