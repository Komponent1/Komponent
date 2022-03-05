import './style.css';
import { createElem } from '../../utils'

type Prop = {
  scrolldiv: HTMLElement,
  elems: HTMLElement[]
}
function scrollnav({ scrolldiv, elems }: Prop) {
  const wrapper = createElem('div', 'kui_scrollnav');
  const navitems = [];
  wrapper.style.setProperty('--num', elems.length + '');
  for (let i = 0; i < elems.length; i++) {
    const navitem = createElem('div', 'kui_scrollnav_item');
    if (i === 0) navitem.classList.add('select');
    wrapper.appendChild(navitem);
    navitems.push(navitem);
  }

  const getOffset = (() => {
    let offsetTop = 0;
    let res = [];

    return () => {
      if (scrolldiv.scrollHeight === offsetTop) {
        return res;
      }
      offsetTop = scrolldiv.scrollHeight;
      res = elems.map(e => {
        const [ offset, clientHeight ] = [ e.offsetTop - scrolldiv.offsetTop, e.clientHeight ];
        return [ offset - clientHeight / 2, offset + clientHeight / 2 ];
      })
      
      return res;
    }
  })();

  scrolldiv.addEventListener('scroll', e => {
    const { scrollTop } = e.target;

    const idx = getOffset().findIndex(([ from, to ]) => (
      scrollTop >= from && scrollTop < to
    ))
    navitems.forEach((navitem, i) => {
      if (i === idx) navitem.classList.add("select");
      else navitem.classList.remove("select"); 
    })
  })

  wrapper.addEventListener('click', e => {
    e.stopPropagation();
    const idx = navitems.indexOf(e.target);

    scrolldiv.scrollTop = elems[idx].offsetTop - scrolldiv.offsetTop;
  });

  return wrapper;
}

export default scrollnav;
