import { fetcher } from '../../utils';
import './infiniteScroll.css'

const datas = Array.from({ length: 100 }).map((e, i) => i + '');

function infiniteScroll(): HTMLDivElement {
  let idx = 0;
  const wrapper = document.createElement("div");  
  wrapper.classList.add("infscroll_wrapper");
  const trigger = document.createElement("div");
  trigger.classList.add("infscroll_trigger");
  wrapper.appendChild(trigger);
  
  const fetchRender = async (idx: number) => {
    wrapper.removeChild(trigger);
    const { data } = await fetcher(datas.slice(idx * 5, idx * 5 + 5));
    const renderItem = data.map((e, i) => 
      `<div class="infscroll_li"><p>${e}</p></div>`
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
