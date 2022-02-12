import './autocomplete.css'
import { createElem, debounce } from '../../utils';

const setAutoEvent = async (comp: HTMLElement, input: HTMLInputElement, classname: string, event: Event, fetcher: Function) => {
  const prev = document.getElementsByClassName(classname);
  if (prev.length !== 0) comp.removeChild(prev[0]);

  const { data } = await fetcher();
  if ((event.target as HTMLInputElement).value === '') return;
    
  const ul = createElem('ul', 'autocomplete_ul') as HTMLUListElement;
  const lis = data.filter(
    e => e.search((event.target as HTMLInputElement).value) !== -1 
          && (event.target as HTMLInputElement).value !== ''
  );

  if (lis.length === 0) return;
  lis.forEach(e => {
    const li = createElem('li', 'autocomplete_li');
    li.innerText = e;
    li.addEventListener('click', e => {
      input.value = (e.target as HTMLLIElement).innerText
      /* forcedd event */
      input.dispatchEvent(new Event('keyup'));
    });
    ul.appendChild(li);
  });
  comp.appendChild(ul);
}
type Prop = {
  fetcher: Function
}
function autocomplete({ fetcher }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'autocomplete') as HTMLDivElement;
  const input = createElem('input', 'autocomplete_input') as HTMLInputElement;
  wrapper.appendChild(input);
  
  input.addEventListener('keyup', debounce(async event => {
    await setAutoEvent(wrapper, input, 'autocomplete_ul', event, fetcher);
  }, 500));

  return wrapper;
};

export default autocomplete;
