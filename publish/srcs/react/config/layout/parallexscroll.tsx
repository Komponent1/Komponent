import { ParallexScroll } from '../../components';
import md from '../../components/parallexscroll/README.md';
import { makeDummyComps } from '../../utils';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'Parallex Scroll',
  comp: ParallexScroll,
  prop: {
    delays: [0.5, 1, 1, 1],
    children: makeDummyComps('500px', '500px'),
    height: '500px'
  },
  explain: md
};

export default config;