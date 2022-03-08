import { BtnMenu } from '../components';
import md from '../components/btnmenu/README.md';
import { CONFIG } from './configType';

const dummies = [
  {
    name: 'check console',
    act: () => console.log('bla'),
  },
  {
    name: 'check alert',
    act: () => alert('bla'),
  },
  {
    name: 'go to other link',
    act: () => history.pushState({}, '', window.location.origin + '/other')
  }
]

const config: CONFIG = {
  name: 'Btn Menu',
  comp: BtnMenu,
  prop: {
    config: dummies
  },
  explain: md
};
export default config;
