import { badge } from '../components';
import md from '../components/badge/README.md';
import { createElem, fetcher } from '../utils';
import { CONFIG } from './configType';

const elem = () => {
  const item = createElem('div');
  item.style.width = '20px';
  item.style.height = '20px';
  item.style.borderRadius = '3px';
  item.style.border = '1px solid rgba(172, 172, 172, 0.5)'

  return item;
}
const config: CONFIG = {
  name: 'Badge',
  render: badge,
  prop: {
    elem: elem(),
    fetcher: async () => await fetcher(5)
  },
  explain: md
};

export default config;