import { Opendrawer } from '../../components';
import md from '../../components/opendrawer/README.md';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'Open Drawer',
  comp: Opendrawer,
  prop: {
    title: 'some drawer',
    config: [{
      text: 'This is 1',
      act: () => console.log('1'),
    },{
      text: 'This is 2',
      act: () => console.log('2')
    }]
  },
  explain: md
};

export default config;