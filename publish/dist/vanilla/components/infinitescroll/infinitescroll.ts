import './infinitescroll.css'
import { createElem } from '../../utils';

type Prop = {
  fetcher: (idx: number) => Promise<{ data: string[] }>
}
function infiniteScroll({ fetcher }: Prop): HTMLDivElement {
  let idx = 0;
  const wrapper = createElem('div', 'kui_infinitescroll') as HTMLDivElement;
  const trigger = createElem('div', 'kui_infinitescroll_trigger');
  wrapper.appendChild(trigger);
  
  const fetchRender = async (idx: number) => {
    wrapper.removeChild(trigger);
    const { data } = await fetcher(idx);
    const renderItem = data.map((e, i) => 
      `<div class="kui_infinitescroll_li">${e}</div>`
    ).join('');

    wrapper.insertAdjacentHTML('beforeend', renderItem);
    wrapper.appendChild(trigger);
  };

  const observer = new IntersectionObserver(
    ([ entry ]) => {
      if (entry.isIntersecting) {
        fetchRender(idx++);
      }
    }
  )
  observer.observe(trigger);

  return wrapper;
};

export default infiniteScroll;
