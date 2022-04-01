import { createElem } from "../../utils";
import './licontextmenu.css'

type config = {
  name: string,
  shortcut?: string,
  li?: config[],
  act?: Function  
}
type Prop = {
  config: config[]
}
function makeContext(type: string, config: config[], parent: HTMLElement): HTMLUListElement {
  const context = createElem(
    'ul',
    type !== 'sub' ? 'kui_licontextmenu_ul' : 'kui_licontextmenu_subul');
  config.map(e => {
    const li = createElem('li', 'kui_licontextmenu_li');
    li.innerText = e.name;
    if (e.li) {
      li.setAttribute('data-content', '>')
      const subul = makeContext('sub', e.li, li);
      li.addEventListener('click', event => {
        event.stopPropagation();
        subul.style.display = (subul.style.display === 'block') ? 'none' : 'block';
      })
    } else {
      li.addEventListener('click', event => {
        event.stopPropagation();
        e.act()
      });
    }
    context.appendChild(li);
  });
  parent.appendChild(context);

  return context as HTMLUListElement;
}
function liContextMenu({ config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_licontextmenu');
  
  config.map(e => {
    const icon = createElem('div', 'kui_licontextmenu_icon');
    icon.innerHTML = `<p>${e.name}</p>`;
    if (e.li) icon.appendChild(makeContext('main', e.li, icon));
    wrapper.appendChild(icon);
  });

  const icons = Array.from(wrapper.children) as HTMLElement[];
  icons.map((icon, j) => {
    icon.addEventListener('click', event => {
      event.stopPropagation();
      for(let i = 0; i < icons.length; i++) {
        if (i === j) {
          if (icon.children.length !== 1 && !icon.classList.contains('select')) {
            (icon.children[1] as HTMLElement).style.display = 'block';
            icon.classList.add('select');
          } else {
            icon.classList.remove('select');
            if (icon.children.length !== 1) {
              (icon.children[1] as HTMLElement).style.display = 'none';
            }
          }
        } else {
          if (icons[i].children.length !== 1){
            (icons[i].children[1] as HTMLElement).style.display = 'none';
            icons[i].classList.remove('select');
          } 
        }
      }
      
    })
  });

  document.body.addEventListener('click', event => {
    if ((event.target as HTMLElement).closest('.kui_licontextmenu')) return;
    for(let i = 0; i < icons.length; i++) {
      if (icons[i].children.length !== 1) (icons[i].children[1] as HTMLElement).style.display = 'none';
      icons[i].classList.remove('select');
    }
  })

  return wrapper as HTMLDivElement;
}

export default liContextMenu;
