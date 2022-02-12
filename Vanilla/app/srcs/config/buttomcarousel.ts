import { buttonCarousel } from '../components'
import { makeDummyElem } from '../utils'
import { CONFIG } from './configType'
import md from '../components/buttonCarousel/README.md'

const config: CONFIG = {
  name: 'Button Carousel',
  render: buttonCarousel,
  prop: {
    elems: makeDummyElem()
  },
  explain: md
};

export default config;
