import { createElem } from "../utils";
import './liContextMenu.css'


type config = {
  name: string,
  shortcut?: string,
  li?: config[],
  act?: Function  
}
export const dummies: config[] = [
  {
    name: 'menu1',
    act: () => console.log('menu1 work')
  },
  {
    name: 'menu2',
    li: [
      {
        name: 'submenu1',
        act: () => console.log('submenu1 work')
      },
      {
        name: 'submenu2',
        li: [
          {
            name: 'subsubemenu1',
            act: () => console.log('subsubemnu1 work')
          }
        ]
      }
    ]
  },
  {
    name: 'menu3',
    li: [
      {
        name: 'submenu3',
        act: () => console.log('submenu3 work')
      }
    ]
    
  }
];
function makeContext(type: string, config: config[], parent: HTMLElement): HTMLUListElement {
  const context = createElem(
    'ul',
    type === 'sub' ? 'licontextmenu_ul' : 'licontextmenu_subul');
  config.map(e => {
    const li = createElem('li', 'licontextmenu_li');
    li.innerText = e.name;
    if (e.li) {
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
function liContextMenu(config: config[]): HTMLDivElement {
  const wrapper = createElem('div', 'licontextmenu');
  
  config.map(e => {
    const icon = createElem('div', 'licontextmenu_icon');
    icon.innerText = e.name;
    if (e.li) icon.appendChild(makeContext('main', e.li, icon));
    wrapper.appendChild(icon);
  });

  const icons = Array.from(wrapper.children) as HTMLElement[];
  icons.map(icon => {
    icon.addEventListener('click', () => {
      for(let i = 0; i < icons.length; i++) {
        if (icons[i].children.length !== 0) icons[i].children[0].style.display = 'none';
      }
      if (icon.children.length !== 0) icon.children[0].style.display = 'block';
    })
  });

  window.addEventListener('click', event => {
    event.stopPropagation();
    if (event.target.classList.contains('licontextmenu')) return;
    for(let i = 0; i < icons.length; i++) {
      if (icons[i].children.length !== 0) icons[i].children[0].style.display = 'none';
    }
  })

  return wrapper as HTMLDivElement;
}

export default liContextMenu;
