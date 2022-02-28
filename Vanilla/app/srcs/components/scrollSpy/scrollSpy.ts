import './scrollspy.css';
import { scrollnav } from '..';
import { throttle, createElem } from '../../utils'

type Prop = {
  elems: HTMLElement[]
}
function scrollSpy({ elems }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_scrollspy') as HTMLDivElement;
  const itemwrap = createElem('div', 'kui_scrollspy_itemwrap');
  const items = [];
  for(let i = 0; i < elems.length; i++) {
    let item = createElem('div', 'kui_scrollspy_item');
    item.appendChild(elems[i]);
    itemwrap.appendChild(item);
    items.push(item);
  }
  const nav = scrollnav({ scrolldiv: itemwrap, elems: items });
  wrapper.appendChild(nav);
  wrapper.appendChild(itemwrap);

  return wrapper;
}

export default scrollSpy;
