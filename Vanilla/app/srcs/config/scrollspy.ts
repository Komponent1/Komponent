import { scrollSpy } from '../components'
import { makeDummyElem } from '../utils'
import { CONFIG } from './configType'
import md from '../components/infiniteScroll/README.md'

const datas = Array.from({ length: 100 }).map((e, i) => i + '');

const config: CONFIG = {
  name: 'Scroll Spy',
  render: scrollSpy,
  prop: {
    elems: makeDummyElem()
  },
  explain: md
};

export default config;
