import { tab } from '../components'
import { createElem, fetcher } from '../utils'
import { CONFIG } from './configType'
import md from '../components/tab/README.md'

const dummyelem = (text: string) => {
  const div = createElem('div');
  div.innerHTML = `<p>${text}</p>`;
  
  return div;
}

const dummies = [
  {
    title: 'Tab1',
    elem: dummyelem('This is Tab1')
  },
  {
    title: 'Tab2',
    elem: dummyelem('This is Tab2')
  },
  {
    title: 'Tab3',
    elem: dummyelem('This is Tab3')
  }
]

const config: CONFIG = {
  name: 'Tab',
  render: tab,
  prop: {
    config: dummies
  },
  explain: md
};

export default config;
