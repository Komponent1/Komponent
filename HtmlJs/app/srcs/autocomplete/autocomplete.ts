import './autocomplete.css'
import { fetcher } from '../utils';

const dummies = [
  'aaabbb', 'aaaaaa', 'aaccc', 'bbbccc'
]

function autocomplete(): HTMLDivElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('ac_wrapper');
  const input = document.createElement('input');
  input.classList.add('ac_input');
  wrapper.appendChild(input);
  const ul = document.createElement('ul');
  ul.classList.add('ac_ul');
  wrapper.appendChild(ul);

  input.addEventListener('keyup', async event => {
    const { data } = await fetcher(dummies);
    ul.innerHTML = ''
    ul.innerHTML = data
      .filter(
        e => e.search(event.target.value) !== -1 
              && event.target.value !== ''
      )
      .map(e => (
        `<li class="ac_li">
          ${e}
        </li>`
      )).join('');
  })

  return wrapper;
};

export default autocomplete;
