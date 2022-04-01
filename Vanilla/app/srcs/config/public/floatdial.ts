import { floatdial } from '../../components';
import md from '../../components/floatdial/README.md';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'Float Dial',
  render: floatdial,
  prop: {
    config: [
      {
        icon: '1',
        type: 'text',
        tip: 'this is tip',
        act: () => { console.log('1') }
      },
      {
        icon: '2',
        type: 'text',
        act: () => { console.log(2) }
      }
    ]
  },
  explain: md
};

export default config;