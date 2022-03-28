import './style.css';
import { createElem } from '../../utils';

type Prop = {
  elem: HTMLElement,
  fetcher: () => Promise<{ data: string | number }>
}
function badge({ elem, fetcher }: Prop): HTMLDivElement {
  let count = 0;

  const wrapper = createElem('div', 'kui_badge') as HTMLDivElement;
  wrapper.appendChild(elem);

  const icon = createElem('div', 'kui_badge_icon');
  wrapper.appendChild(icon);

  const getCount = async () => {
    count = (await fetcher()).data as number;

    if (count !== 0) {
      icon.innerText = count + '';
      icon.style.display = 'block';
    }
  }

  getCount();

  return wrapper;
};

export default badge;
