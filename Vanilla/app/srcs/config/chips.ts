import { chipsui } from '../components';
import md from '../components/chipsui/README.md';
import { createElem, fetcher } from '../utils';
import { CONFIG } from './configType';

const config: CONFIG = {
  name: 'Chips UI',
  render: chipsui,
  prop: {
    prev: ['chips', 'ui']
  },
  explain: md
};

export default config;