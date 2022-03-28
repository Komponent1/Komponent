import { dragablepannel } from '../components'
import { CONFIG } from './configType'
import md from '../components/dragablepannel/README.md'
import { createElem } from '../utils';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const dummies = () => {
  const color = ['black', 'blue', 'red', 'green']

  const items = [];
  for (let i = 0; i < color.length; i++) {
    const item = createElem('div');
    item.style.width = getRandomInt(100, 200) + 'px';
    item.style.height = getRandomInt(100, 200) + 'px';
    item.style.borderRadius = '10px';
    item.style.background = color[i];
    item.style.textAlign = 'center';
    item.innerHTML = `<span>TEST</span>`
    items.push(item);
    
  }

  return items;
}

const config: CONFIG = {
  name: 'Dragable Pannel',
  render: dragablepannel,
  prop: {
    elems: dummies()
  },
  explain: md
};

export default config;
