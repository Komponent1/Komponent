import './scrollSpy.css';
import { throttle, createElem } from '../../utils'

type Prop = {
  elems: HTMLElement[]
}
function scrollSpy({ elems }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'scrollspy') as HTMLDivElement;
  const nav = createElem('div', 'scrollspy_nav');
  wrapper.appendChild(nav);

  const navitems = [];
  const items = [];
  for(let i = 0; i < elems.length; i++) {
    let item = createElem('div', 'scrollspy_item');
    item.appendChild(elems[i]);
    wrapper.appendChild(item);
    items.push(item);
    
    let navitem = createElem('div', 'scrollspy_navitem');
    navitem.style.setProperty("--num", elems.length + '');
    nav.appendChild(navitem)
    navitems.push(navitem);
  }

  const getOffset = (() => {
    let offsetTop = 0;
    let res = [];

    return () => {
      if (window.innerHeight === offsetTop) {
        return res;
      }
      offsetTop = window.innerHeight;
      res = items.map(e => {
        const [ offset, clientHeight ] = [ e.offsetTop, e.clientHeight ];
        return [ offset - clientHeight / 2, offset + clientHeight / 2 ];
      })
      
      return res;
    }
  })();

   window.addEventListener("scroll", throttle((e: any) => {
    const { scrollTop } = e.target.scrollingElement;

    const idx = getOffset().findIndex(([from, to]) => (
      scrollTop >= from && scrollTop < to
    ));
    navitems.forEach((navitem, i) => {
      if (i === idx) navitem.classList.add("select");
      else navitem.classList.remove("select");
    })
  }, 300))

  nav.addEventListener("click", e => {
    e.stopPropagation();
    const idx = navitems.indexOf(e.target);

    items[idx].scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  });

  return wrapper;
}

export default scrollSpy;
