import './contextmenu.css'
import { createElem } from '../../utils';

type config = {
  
}
type Prop = {
  config: {
    menu: string,
    context: string,
  }[]
}
// 단일 메뉴의 경우
function contextMenu({ config }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_contextmenu') as HTMLDivElement;

  const menus = [];
  const contexts = [];
  for (let i = 0; i < config.length; i++) {
    let menu = createElem('p', 'kui_contextmenu_menu');
    menu.innerText = config[i].menu;
    let context = createElem('p', 'kui_contextmenu_context');
    context.innerText = config[i].context;
    menu.appendChild(context);
    wrapper.appendChild(menu);
    
    menus.push(menu);
    contexts.push(context);
  }

  wrapper.addEventListener("click", e => {
    e.stopPropagation();

    menus.forEach((menu, i) => {
      if (contexts[i] === e.target) {
        return;
      } else if (menu === e.target) {
        contexts[i].style.display = "block";
        contexts[i].style.setProperty("--top", (e.offsetY) + "px");
        contexts[i].style.setProperty("--left", (e.offsetX) + "px");
      } else {
        contexts[i].style.display = "none";
      }
    });
  });

  window.addEventListener("click", e => {
    e.stopPropagation();
    
    contexts.forEach(context => {
      context.style.display = "none";
    })
  })

  return wrapper;
}

export default contextMenu
