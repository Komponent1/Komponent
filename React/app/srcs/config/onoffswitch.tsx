import { OnOffSwitch } from '../components';
import md from '../components/onoffswitch/README.md';
import { CONFIG } from './configType';

const config: CONFIG = {
  name: 'ON OFF Switch',
  comp: OnOffSwitch,
  prop: {
    setValue: (on: boolean) => {}
  },
  explain: md
};

export default config;