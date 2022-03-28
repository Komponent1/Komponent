import { createElem } from '../../utils';
import { checkbox } from '../'
import './style.css';

type Config = {
  name: string,
  [key: string] : any
}
type Prop = {
  checkoption?: (checked: boolean[]) => any|void,
  config: Config[]
}
function list ({ checkoption, config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_list') as HTMLDivElement;
  let checked = Array.from({ length: config.length }).map(_ => false);

  const liTitle = createElem('div', 'kui_list_title');
  Object.entries(config[0]).map(([key, value]) => {
    const item = createElem('div', 'kui_list_item')
    
    if (key === 'name') {
      item.innerHTML = `<span>${key}</span>`
      liTitle.appendChild(item); 
      item.appendChild(createElem('div', 'kui_list_space'));
    } else {
      item.innerText = key;
      liTitle.appendChild(item);
    }
  });
  wrapper.appendChild(liTitle);

  config.forEach((li, i) => {
    const list = createElem('div', 'kui_list_li');
    Object.entries(li).map(([key, value], j) => {
      const item = createElem('div', 'kui_list_item')
    
      if (key === 'name') {
        if (checkoption) {
          const span = createElem('span');
          span.appendChild(checkbox({ 
            init: checked[i],
            setChecked: (check) => {
              checked[i] = check;
              checkoption(checked);
            }
          }))
          item.append(span);
        }
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
