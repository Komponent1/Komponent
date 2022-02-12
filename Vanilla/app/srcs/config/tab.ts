import { tab } from '../components'
import { fetcher } from '../utils'
import { CONFIG } from './configType'
import md from '../components/tab/README.md'

const dummies = [
  {
    title: 'Tab1',
    content: 'This is Tab1'
  },
  {
    title: 'Tab2',
    content: 'This is Tab2'
  },
  {
    title: 'Tab3',
    content: 'This is Tab3'
  }
]

const config: CONFIG = {
  name: 'Tab',
  render: tab,
  prop: {
    fetcher: async () => await fetcher(dummies)
  },
  explain: md
};

export default config;
