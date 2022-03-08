import { createElem } from '../../utils';
import './style.css'

type Prop = {
  style?: string
  fetcher?: (rate: number) => Promise<any|void>
  num?: number,
  init?: number
}
function rating({ style = 'star', fetcher = async () => {}, num = 5, init = 0 }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_rating') as HTMLDivElement;
  const rates: HTMLElement[] = [];
  for(let i = 0; i < num; i++) {
    const rate = createElem('div', 'kui_rating_rate');
    if (i < init) rate.classList.add('select');
    rate.innerText = "\u2606";
    rates.push(rate);
    wrapper.appendChild(rate);
  }

  let value: number = init;

  const updateValue = (newValue: number, before: number) => {
    fetcher(value).then(() => {
      value = newValue;
    }).catch((err) => {
      alert(err);
      for (let i = 0; i < before; i++) rates[i].classList.add('select');
      for (let i = before; i < num; i++) rates[i].classList.remove('select');
    })
  }

  rates.forEach((rate, i) => {
    rate.addEventListener('mouseover', () => {
      for(let j = 0; j < i + 1; j++) rates[j].classList.add('hover');
    });
    rate.addEventListener('mouseleave', () => {
      for(let j = 0; j < num; j++) rates[j].classList.remove('hover');
    })
    rate.addEventListener('click', e => {
      if (rate.classList.contains('select') && ( i + 1 === num || !rates[i + 1].classList.contains('select'))) {
        rate.classList.remove('select');
        updateValue(value - 1, value);
        return;
      }
      for (let j = 0; j < i + 1; j++) rates[j].classList.add('select');
      for (let j = i + 1; j < num; j++) rates[j].classList.remove('select');
      updateValue(i, value);
    })
  })


  return wrapper;
};

export default rating;
