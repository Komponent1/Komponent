import { Pointline } from '../../components';
import md from '../../components/pointline/README.md';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'Point Line',
  comp: Pointline,
  prop: {
    width: 500,
    height: 500,
    num: 5
  },
  explain: md
};

export default config;