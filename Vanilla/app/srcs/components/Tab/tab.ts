import './tab.css';
import { fetcher } from '../../utils';

const dummies = Array.from({ length: 3 }).map((_, i) => ({
  title: `${i}`,
  content: `This is ${i}`
}));

function Tab(): HTMLDivElement {
  let datas = null;

  const wrapper = document.createElement('div');
  wrapper.classList.add('tab_wrapper');
  const nav = document.createElement('div');
  nav.classList.add('tab_nav');
  const item = document.createElement('div');
  item.classList.add('tab_item');
  wrapper.appendChild(nav);
  wrapper.appendChild(item);

  const navitems: HTMLDivElement[] = [];
  
  const click = (e, idx: number) => {
    console.log(navitems[idx].classList);
    if (navitems[idx].classList.contains('select')) return;
    for (let i = 0; i < navitems.length; i++) {
      if (navitems[i].classList.contains('select'))
        navitems[i].classList.remove('select');
    }
    navitems[idx].classList.add('select');
    item.innerHTML = `${datas[idx].content}`
  }

  const fetchData = async () => {
    datas = (await fetcher(dummies)).data;
    for (let i = 0; i < datas.length; i++) {
      let navitem = document.createElement('div');
      navitem.classList.add('tab_navitem');
      if (i === 0) navitem.classList.add('select');
      navitem.style.setProperty('--num', datas.length);
      navitem.innerHTML = `<p>${datas[i].title}</p>`
      
      navitem.addEventListener('click', e => click(e, i));
      navitems.push(navitem);
      nav.appendChild(navitem)
    }
    
    item.innerHTML = datas[0].content;
  };

  window.addEventListener("load", () => fetchData());

  return wrapper;
};

export default Tab;
