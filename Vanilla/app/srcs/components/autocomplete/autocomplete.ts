import './autocomplete.css'
import { createElem, debounce } from '../../utils';

type Prop = {
  fetcher: Function,
  placeholder: string
}
function autocomplete({ fetcher, placeholder }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'autocomplete') as HTMLDivElement;
  const input = createElem('input', 'autocomplete_input') as HTMLInputElement;
  const ul = createElem('ul', 'autocomplete_ul');
  input.setAttribute('placeholder', placeholder);
  wrapper.appendChild(input);
  wrapper.appendChild(ul);

  const makelist = (datas) => {
    ul.innerHTML = '';
    for (let  i = 0; i < datas.length; i++) {
      const li = createElem('li', 'autocomplete_li');
      li.innerText = datas[i];
      li.addEventListener('click', e => {
        e.stopPropagation();
        input.value = (e.target as HTMLLIElement).innerText;
        update();
        ul.style.display = 'none';
      });

      ul.appendChild(li);
    }
  }

  const update = async () => {
    const { data } = await fetcher();
    const value = input.value;

    if (value === '') {
      makelist(data);
    } else {
      makelist(data.filter(e => e.search(value) !== -1 && (value !== '')));
    }
  }

  input.addEventListener('keyup', debounce(() => {
    update();
  }, 500));
  input.addEventListener('focusin', () => {
    ul.style.display = 'block';
    update();
  });
  window.addEventListener('click', e => {
    if ((e.target as HTMLElement).closest('.autocomplete')) return;
    else ul.style.display = 'none';
  })

  return wrapper;
};

export default autocomplete;
