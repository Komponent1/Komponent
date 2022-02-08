import './autocomplete.css'
import { fetcher } from '../../utils';

const dummies = [
  'aaabbb', 'aaaaaa', 'aaccc', 'bbbccc'
]

function autocomplete(): HTMLDivElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('ac_wrapper');
  const input = document.createElement('input');
  input.classList.add('ac_input');
  wrapper.appendChild(input);
  
  input.addEventListener('keyup', async event => {
    const prev = document.getElementsByClassName('ac_ul');
    if (prev.length !== 0) wrapper.removeChild(prev[0]);

    const { data } = await fetcher(dummies);
    if (event.target.value === '') return;
    
    const ul = document.createElement('ul');
    ul.classList.add('ac_ul');
    const lis = data.filter(
      e => e.search(event.target.value) !== -1 
            && event.target.value !== ''
    );
    if (lis.length === 0) return;
    ul.innerHTML = lis.map(e => (
        `<li class="ac_li">
          ${e}
        </li>`
      )).join('');

    wrapper.appendChild(ul);
  })

  return wrapper;
};

export default autocomplete;
