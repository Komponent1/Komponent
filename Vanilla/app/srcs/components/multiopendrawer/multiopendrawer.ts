import './style.css'
import { createElem } from "../../utils";
import { opendrawer } from '../';

type Config = {
  title: string,
  list: {
    text: string,
    act: (e: MouseEvent, value?: string) => void | any
  }[]
}
type Prop = {
  config: Config[]
  direction?: 'row'|'column',
  init?: number
}

function multiopendrawer({ config, direction = 'column', init = -1 }: Prop): HTMLDivElement {
  const wrapper = createElem('div', '.kui_multiopendrawer') as HTMLDivElement;
  
  for(let i = 0; i < config.length; i++) {
    const drawer = opendrawer({ title: config[i].title, config: config[i].list, init: init === i });
    wrapper.appendChild(drawer);
  }
  const list = Array.from(wrapper.getElementsByClassName('kui_opendrawer')) as HTMLElement[];
  list.forEach(drawer => {
      Array.from(drawer.getElementsByClassName('kui_opendrawer_li')).map(li => {
        li.addEventListener('click', () => {
          list.forEach(sel => {
            if (sel !== drawer) sel.style.setProperty('--height', '0')
          })
        })
      })
  })


  return wrapper;
};

export default multiopendrawer;
