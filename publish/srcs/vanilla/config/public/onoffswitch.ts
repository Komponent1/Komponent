import { onoffswitch } from '../../components';
import md from '../../components/onoffswitch/README.md';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'ON OFF Switch',
  render: onoffswitch,
  prop: {
    setValue: (on: boolean) => {}
  },
  explain: md
};

export default config;