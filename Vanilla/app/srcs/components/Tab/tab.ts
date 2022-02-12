import './tab.css';
import { createElem } from '../../utils';

type Prop = {
  fetcher: Function 
};
function Tab({ fetcher }: Prop): HTMLDivElement {
  let datas = null;

  const wrapper = createElem('div', 'tab') as HTMLDivElement;
  const nav = createElem('div', 'tab_nav');
  const item = createElem('div', 'tab_item');
  wrapper.appendChild(nav);
  wrapper.appendChild(item);

  const navitems: HTMLDivElement[] = [];
  
  const click = (e: Event, idx: number) => {
    if (navitems[idx].classList.contains('select')) return;
    for (let i = 0; i < navitems.length; i++) {
      if (navitems[i].classList.contains('select'))
        navitems[i].classList.remove('select');
    }
    navitems[idx].classList.add('select');
    item.innerHTML = `${datas[idx].content}`
  }

  const fetchData = async () => {
    datas = (await fetcher()).data;
    console.log(datas);
    for (let i = 0; i < datas.length; i++) {
      let navitem = createElem('div', 'tab_navitem') as HTMLDivElement;
      if (i === 0) navitem.classList.add('select');
      navitem.style.setProperty('--num', datas.length);
      navitem.innerHTML = `<p>${datas[i].title}</p>`
      
      navitem.addEventListener('click', e => click(e, i));
      navitems.push(navitem);
      nav.appendChild(navitem)
    }
    
    item.innerHTML = datas[0].content;
  };
  fetchData();

  return wrapper;
};

export default Tab;
