import { changecarousel } from '../components'
import { makeDummyElem } from '../utils'
import { CONFIG } from './configType'
import md from '../components/changecarousel/README.md'

const config: CONFIG = {
  name: 'Change Carousel',
  render: changecarousel,
  prop: {
    elems: makeDummyElem(),
    width: '400px',
    height: '200px'
  },
  explain: md
};

export default config;
