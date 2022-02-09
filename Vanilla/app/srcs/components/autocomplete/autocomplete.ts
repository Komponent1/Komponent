import './autocomplete.css'
import { fetcher, createElem } from '../../utils';

const dummies = [
  'aaabbb', 'aaaaaa', 'aaccc', 'bbbccc'
]

function autocomplete(): HTMLDivElement {
  const wrapper = createElem('div', 'ac_wrapper') as HTMLDivElement;
  const input = createElem('input', 'ac_input') as HTMLInputElement;
  wrapper.appendChild(input);
  
  input.addEventListener('keyup', async event => {
    const prev = document.getElementsByClassName('ac_ul');
    if (prev.length !== 0) wrapper.removeChild(prev[0]);

    const { data } = await fetcher(dummies);
    if ((event.target as HTMLInputElement).value === '') return;
    
    const ul = createElem('ul', 'ac_ul') as HTMLUListElement;
    const lis = data.filter(
      e => e.search((event.target as HTMLInputElement).value) !== -1 
            && (event.target as HTMLInputElement).value !== ''
    );
    if (lis.length === 0) return;
    ul.innerHTML = lis.map(e => (
      `<li class="ac_li">${e}</li>`
    )).join('');

    wrapper.appendChild(ul);
  })

  return wrapper;
};

export default autocomplete;
