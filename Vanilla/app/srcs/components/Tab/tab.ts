import './tab.css';
import { createElem } from '../../utils';

type Config = {
  title: string,
  elem: HTMLElement
}
type Prop = {
  config: Config[]
};
function Tab({ config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_tab') as HTMLDivElement;
  const nav = createElem('div', 'kui_tab_nav');
  const item = createElem('div', 'kui_tab_item');
  const glider = createElem('div', 'kui_tab_glider');
  wrapper.appendChild(nav);
  wrapper.appendChild(item);
  nav.appendChild(glider);

  const click = (e: Event, idx: number) => {
    if (navitems[idx].classList.contains('select')) return;
    for (let i = 0; i < navitems.length; i++) {
      if (navitems[i].classList.contains('select'))
        navitems[i].classList.remove('select');
    }
    glider.style.setProperty('--idx', idx + '');
    navitems[idx].classList.add('select');
    item.innerHTML = config[idx].elem.outerHTML;
  }

  nav.style.setProperty('--num', config.length + '')
  const navitems = config.map(({ title }, i) => {
    let navitem = createElem('div', 'kui_tab_navitem') as HTMLDivElement;
    if (i === 0) navitem.classList.add('select');
    navitem.innerHTML = `<p>${title}</p>`
    navitem.addEventListener('click', e => click(e, i));
    nav.appendChild(navitem)

    return navitem;
  });
  item.innerHTML = config[0].elem.outerHTML;

  return wrapper;
};

export default Tab;
