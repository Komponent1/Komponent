import { Filterdropdown } from '../components';
import md from '../components/filterdropdown/README.md';
import { CONFIG } from './configType';

const config: CONFIG = {
  name: 'Filter Dropdown',
  comp: Filterdropdown,
  prop: {
    init: 'C',
    list: ['C', 'Cpp', 'javascript', 'java', 'python'],
    setOption: (option: string, idx?:number) => {},
  },
  explain: md
};

export default config;
