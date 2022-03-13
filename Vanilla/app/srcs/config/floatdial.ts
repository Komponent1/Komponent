import { floatdial } from '../components';
import md from '../components/floatdial/README.md';
import { CONFIG } from './configType';

const config: CONFIG = {
  name: 'Float Dial',
  render: floatdial,
  prop: {
    config: [
      {
        icon: '1',
        type: 'text',
        tip: 'this is tip'
      },
      {
        icon: '2',
        type: 'text',
      }
    ]
  },
  explain: md
};

export default config;