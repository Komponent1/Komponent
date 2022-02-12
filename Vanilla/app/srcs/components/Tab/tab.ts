import './tab.css';
import { createElem } from '../../utils';

type Tab = {
  title: string,
  elem: HTMLElement
}
type Prop = {
  tabs: Tab[]
};
function Tab({ tabs }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'tab') as HTMLDivElement;
  const nav = createElem('div', 'tab_nav');
  const item = createElem('div', 'tab_item');
  wrapper.appendChild(nav);
  wrapper.appendChild(item);

  const click = (e: Event, idx: number) => {
    if (navitems[idx].classList.contains('select')) return;
    for (let i = 0; i < navitems.length; i++) {
      if (navitems[i].classList.contains('select'))
        navitems[i].classList.remove('select');
    }
    navitems[idx].classList.add('select');
    item.innerHTML = tabs[idx].elem.outerHTML;
  }

  const navitems = tabs.map(({ title }, i) => {
    let navitem = createElem('div', 'tab_navitem') as HTMLDivElement;
    if (i === 0) navitem.classList.add('select');
    navitem.style.setProperty('--num', tabs.length + '');
    navitem.innerHTML = `<p>${title}</p>`
    navitem.addEventListener('click', e => click(e, i));
    nav.appendChild(navitem)

    return navitem;
  });
  item.innerHTML = tabs[0].elem.outerHTML;

  return wrapper;
};

export default Tab;
