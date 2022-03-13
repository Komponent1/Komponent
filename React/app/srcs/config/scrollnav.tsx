import { Scrollspy } from '../components'
import { makeDummyComps } from '../utils'
import { CONFIG } from './configType'
import md from '../components/scrollnav/README.md'

const config: CONFIG = {
  name: 'Scroll Nav',
  comp: Scrollspy,
  prop: {
    children: makeDummyComps('400px', '200px'),
    height: '200px'
  },
  explain: md
};

export default config;
