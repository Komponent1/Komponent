import { parallexscroll } from '../components';
import md from '../components/parallexscroll/README.md';
import { createElem } from '../utils';
import { CONFIG } from './configType';

const dummy = (color: string) => {
  const elem = createElem('div');
  elem.style.width = '500px';
  elem.style.height = '500px';
  elem.style.border = '2px solid black';
  elem.style.background = color;
  elem.innerText = color;
  elem.style.textAlign = 'center';
  elem.style.lineHeight = '500px';

  return elem;
}

const config: CONFIG = {
  name: 'Parallex Scroll',
  render: parallexscroll,
  prop: {
    config: [
      {
        elem: dummy('blue'),
        delay: 0.5,
      },
      {
        elem: dummy('green'),
        delay: 1,
      },
      {
        elem: dummy('red'),
        delay: 1,
      }
    ]
  },
  explain: md
};

export default config;