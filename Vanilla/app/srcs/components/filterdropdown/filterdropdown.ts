import './style.css'
import { createElem } from '../../utils';

type Prop = {
  placeholder?: string
  init?: string
  list: string[]
  setOption: (optin: string, idx?: number) => void|any
}
function makeLi(list, ul, input) {
  for(let i = 0 ; i < list.length; i++) {
    const li = createElem('div', 'kui_filterdropdown_li');
    li.innerText = list[i];
    li.addEventListener('click', () => {
      input.setAttribute('value', (list[i]));
      ul.style.display = 'none';
    })
    ul.appendChild(li);
  }
}

function filterdropdown({ placeholder, init, list, setOption }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_filterdropdown') as HTMLDivElement;
  const input = createElem('input', 'kui_filterdropdown_input');
  const ul = createElem('div', 'kui_filterdropdown_ul');
  wrapper.appendChild(input);
  wrapper.appendChild(ul);

  input.setAttribute('placehoder', placeholder ? placeholder : '');
  input.addEventListener('focusin', () => ul.style.display = 'block');
  input.setAttribute('value', init ? init : '');
  input.addEventListener('keyup', e => {
    const value = (e.target as HTMLInputElement).value;
    ul.innerHTML = '';
    if (value === '') makeLi(list, ul, input);
    else makeLi(list.filter(l => l.search(value) !== -1), ul, input);
  });
  window.addEventListener('click', e => {
    if (!(e.target as HTMLDivElement).closest('.kui_filterdropdown')) {
      ul.style.display = 'none';
    }
  })

  makeLi(list, ul, input);

  return wrapper;
};

export default filterdropdown;
