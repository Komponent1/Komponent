import { ButtonCarousel } from '../components'
import { makeDummyComps } from '../utils'
import { CONFIG } from './configType'
import md from '../components/buttonCarousel/README.md';

const config: CONFIG = {
  name: 'Button Carousel',
  comp: ButtonCarousel,
  prop: {
    elems: makeDummyComps()
  },
  explain: md
};

export default config;
