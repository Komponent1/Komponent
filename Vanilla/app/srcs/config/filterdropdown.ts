import { filterdropdown } from '../components';
import md from '../components/filterdropdown/README.md';
import { CONFIG } from './configType';

const config: CONFIG = {
  name: 'Filter Dropdown',
  render: filterdropdown,
  prop: {
    init: 'c',
    list: ['c', 'cpp', 'javascript'],
    setOption: (option: string, idx?:number) => {},
  },
  explain: md
};

export default config;
