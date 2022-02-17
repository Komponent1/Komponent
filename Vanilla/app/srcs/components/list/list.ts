import { createElem } from '../../utils';
import { checkbox } from '../'
import './style.css';

function list ({ lis }): HTMLDivElement {
  const wrapper = createElem('div', 'list') as HTMLDivElement;
  let checked = Array.from({ length: lis.length }).map(_ => false);

  const liTitle = createElem('div', 'list_title');
  Object.entries(lis[0]).map(([key, value]) => {
    const item = createElem('div', 'list_item')
    
    if (key === 'name') {
      item.innerHTML = `<span>${key}</span>`
      liTitle.appendChild(item); 
      item.appendChild(createElem('div', 'list_space'));
    } else {
      item.innerText = key;
      liTitle.appendChild(item);
    }
  });
  wrapper.appendChild(liTitle);

  lis.forEach((li, i) => {
    const list = createElem('div', 'list_li');
    Object.entries(li).map(([key, value], j) => {
      const item = createElem('div', 'list_item')
    
      if (key === 'name') {
        const span = createElem('span');
        span.appendChild(checkbox({ init: checked[i], setChecked: () => {}}))
        item.append(span);
        item.insertAdjacentText('beforeend', value as string);
        list.appendChild(item); 
      } else {
        item.innerText = value as string;
        list.appendChild(item);
      }
    })
    wrapper.appendChild(list);
  })
  
  return wrapper;
};

export default list;
