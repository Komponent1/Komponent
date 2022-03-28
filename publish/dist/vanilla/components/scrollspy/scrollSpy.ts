import './scrollspy.css';
import { throttle, createElem } from '../../utils'

type Prop = {
  elems: HTMLElement[]
}
function scrollSpy({ elems }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_scrollspy') as HTMLDivElement;
  const nav = createElem('div', 'kui_scrollspy_nav');
  const itemwrap = createElem('div', 'kui_scrollspy_itemwrap');
  wrapper.appendChild(nav);
  wrapper.appendChild(itemwrap);

  const navitems = [];
  const items = [];
  for(let i = 0; i < elems.length; i++) {
    let item = createElem('div', 'kui_scrollspy_item');
    item.appendChild(elems[i]);
    itemwrap.appendChild(item);
    items.push(item);
    
    let navitem = createElem('div', 'kui_scrollspy_navitem');
    navitem.style.setProperty("--num", elems.length + '');
    if (i === 0) navitem.classList.add('select');
    nav.appendChild(navitem)
    navitems.push(navitem);
  }

  const getOffset = (() => {
    let offsetTop = 0;
    let res = [];

    return () => {
      console.log(itemwrap.scrollHeight)
      if (itemwrap.scrollHeight === offsetTop) {
        return res;
      }
      offsetTop = itemwrap.scrollHeight;
      res = items.map(e => {
        const [ offset, clientHeight ] = [ e.offsetTop - itemwrap.offsetTop, e.clientHeight ];
        return [ offset - clientHeight / 2, offset + clientHeight / 2 ];
      })
      
      return res;
    }
  })();

   itemwrap.addEventListener("scroll", throttle((e: any) => {
    const { scrollTop } = e.target;

    const idx = getOffset().findIndex(([from, to]) => {
      console.log(from, to, scrollTop)
      return (
      scrollTop >= from && scrollTop < to
    )});
    navitems.forEach((navitem, i) => {
      if (i === idx) navitem.classList.add("select");
      else navitem.classList.remove("select");
    })
  }, 300))

  nav.addEventListener("click", e => {
    e.stopPropagation();
    const idx = navitems.indexOf(e.target);

    itemwrap.scrollTop = items[idx].offsetTop - itemwrap.offsetTop;
  });

  return wrapper;
}

export default scrollSpy;
