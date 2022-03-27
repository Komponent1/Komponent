import './style.css';
import { createElem } from '../../utils';
import * as _ from 'lodash';
import { list } from '../';

type Prop = {
  checkoption?: (checked: boolean[]) => any|void,
  config: { name: string, [key: string]: string }[]
}
function sortedlist ({ checkoption, config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_sortedlist') as HTMLDivElement;
  let sortdata = _.cloneDeep(config);

  const sorting = (label?: string) => {
    label? sortdata.sort((a, b) => a[label] < b[label] ? 1 : -1) : null;
    wrapper.innerHTML = '';
    wrapper.appendChild(list({ config: sortdata, checkoption: checkoption }));

    const titles = wrapper.getElementsByClassName('kui_list_title')[0].children;
    Array.from(titles).forEach(title => {
      title.addEventListener('click', e => {
        sorting((e.target as HTMLElement).textContent);
      })
    })
  };

  sorting();

  return wrapper;
}

export default sortedlist;
