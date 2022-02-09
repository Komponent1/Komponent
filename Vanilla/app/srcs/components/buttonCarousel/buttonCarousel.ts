import './buttonCarousel.css'

type Prop = {
  elems: HTMLDivElement[]
}
function buttonCarousel({ elems }: Prop): HTMLDivElement {
  let idx = 0;
  let isChanged = false;

  const wrapper = document.createElement('div');
  wrapper.classList.add('btncarousel');
  const btnset = document.createElement('div');
  btnset.classList.add('btncarousel_btnset');
  let btns = [];
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.add('btncarousel_item');
    elems[i].ontransitionend = e => {
      isChanged = false;
    }
    let button = document.createElement('button');
    if (i === 0) {
      button.classList.add('select');
      elems[i].style.opacity = '1';
    }
    wrapper.appendChild(elems[i]);
    btnset.appendChild(button);
    btns.push(button);
  }
  wrapper.appendChild(btnset);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', btn => {
      if (i === idx || isChanged) return;
      isChanged = true;
      btns.forEach(
        (e, j) => {
          e.classList.contains('select') && j !== i ? e.classList.remove('select'): null
        }
      )
      elems[idx].style.opacity = '0';
      idx = i;
      elems[idx].style.opacity = '1';
      btn.target.classList.add('select');
    });
  }

  return wrapper;
}

export default buttonCarousel;
