import { tip } from '../components'
import { CONFIG } from './configType'
import md from '../components/tip/README.md'
import { createElem } from '../utils'

const elem = () => {
  const div = createElem('div');
  div.style.width = '15px';
  div.style.height = '15px';
  div.style.background = 'grey';
  div.style.borderRadius = '3px';

  return div;
}

const config: CONFIG = {
  name: 'Tip',
  render: tip,
  prop: {
    elem: elem(),
    text: 'this is tip',
    position: 'right'
  },
  explain: md
};

export default config;
