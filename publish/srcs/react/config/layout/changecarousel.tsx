import { ChangeCarousel } from '../../components'
import { makeDummyComps } from '../../utils'
import { CONFIG } from '../configType'
import md from '../../components/changecarousel/README.md';

const config: CONFIG = {
  name: 'Change Carousel',
  comp: ChangeCarousel,
  prop: {
    children: makeDummyComps('400px', '200px'),
    width: '400px',
    height: '200px',
  },
  explain: md
};

export default config;
