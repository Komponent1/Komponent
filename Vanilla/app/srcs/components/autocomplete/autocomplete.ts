import './autocomplete.css'
import { createElem, debounce } from '../../utils';

type Prop = {
  fetcher: () => Promise<{ data: string[] | string }>,
  placeholder: string
}
function autocomplete({ fetcher, placeholder = '' }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_autocomplete') as HTMLDivElement;
  const input = createElem('input', 'kui_autocomplete_input') as HTMLInputElement;
  const ul = createElem('ul', 'kui_autocomplete_ul');
  input.setAttribute('placeholder', placeholder);
  wrapper.appendChild(input);
  wrapper.appendChild(ul);

  const makelist = (datas: string[]) => {
    ul.innerHTML = '';
    for (let  i = 0; i < datas.length; i++) {
      const li = createElem('li', 'kui_autocomplete_li');
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
    const { data } = await fetcher() as { data: string[] };
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
    if ((e.target as HTMLElement).closest('.kui_autocomplete')) return;
    else ul.style.display = 'none';
  })

  return wrapper;
};

export default autocomplete;
