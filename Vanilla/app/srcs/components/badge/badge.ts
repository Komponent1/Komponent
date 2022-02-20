import './style.css';
import { createElem } from '../../utils';

function badge({ elem, fetcher }): HTMLDivElement {
  let count = 0;

  const wrapper = createElem('div', 'badge') as HTMLDivElement;
  wrapper.appendChild(elem);

  const icon = createElem('div', 'badge_icon');
  wrapper.appendChild(icon);

  const getCount = async () => {
    count = (await fetcher()).data;

    if (count !== 0) {
      icon.innerText = count + '';
      icon.style.display = 'block';
    }
  }

  getCount();

  return wrapper;
};

export default badge;
