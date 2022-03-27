import { scrollSpy } from '../../components'
import { makeDummyElem } from '../../utils'
import { CONFIG } from '../configType'
import md from '../../components/scrollnav/README.md'

const config: CONFIG = {
  name: 'Scroll Nav',
  render: scrollSpy,
  prop: {
    elems: makeDummyElem(),
    height: '200px'
  },
  explain: md
};

export default config;
