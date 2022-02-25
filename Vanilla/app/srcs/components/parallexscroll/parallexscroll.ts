import './style.css';
import { createElem } from '../../utils';

type Prop = {
  config: {
    elem: HTMLElement,
    delay: number,
  }[]
}
function parallexscroll({ config }: Prop) {
  const wrapper  = createElem('div', 'kui_parallexscroll');
  const layers: HTMLElement[] = [];

  for (let i = 0; i < config.length; i++) {
    const layer = createElem('div', 'kui_parallexscroll_layer');
    layer.appendChild(config[i].elem);
    layer.style.zIndex = (i + 10) + '';
    layers.push(layer);
    wrapper.appendChild(layer);
  }

  wrapper.addEventListener('scroll', e => {
    const { scrollTop } = e.target as HTMLElement;
  
    const addheight = (i: number) => {
      let height = 0;
      for (let j = i; j > 0; j--) {
        height += layers[i].offsetHeight;
      }
      return height;
    }

    layers.forEach((layer, i) => {
      if (scrollTop >= i * layers[i].offsetHeight) {
        layer.style.setProperty('--y', 
          (scrollTop * (config[i].delay < 1 ? config[i].delay : 1)) - addheight(i) + 'px' );
      }
    });
  });
  
  return wrapper;
};

export default parallexscroll;
