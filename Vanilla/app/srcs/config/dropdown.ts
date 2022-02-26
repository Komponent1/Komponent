import { dropdown } from '../components';
import md from '../components/dropdown/README.md';
import { CONFIG } from './configType';

const config: CONFIG = {
  name: 'Dropdown',
  render: dropdown,
  prop: {
    tag: 'num',
    options: ['1', '2', '3'],
    setOption: (option: string, idx?:number) => {},
  },
  explain: md
};

export default config;
