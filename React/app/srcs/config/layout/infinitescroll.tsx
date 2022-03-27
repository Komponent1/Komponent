import { InfiniteScroll } from '../../components'
import { fetcher } from '../../utils'
import { CONFIG } from '../configType'
import md from '../../components/infiniteScroll/README.md'

const datas = Array.from({ length: 100 }).map((e, i) => i + '');

const config: CONFIG = {
  name: 'Infinite Scroll',
  comp: InfiniteScroll,
  prop: {
    fetcher: async (idx: number) => await fetcher(datas.slice(idx * 5, idx * 5 + 5))
  },
  explain: md
};

export default config;
