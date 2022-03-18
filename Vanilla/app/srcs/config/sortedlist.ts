import { sortedlist } from '../components';
import md from '../components/sortedlist/README.md';
import { CONFIG } from './configType';

const time = () => {
  const raw = new Date();
  
  return `${raw.getFullYear()}/${raw.getMonth()}/${raw.getDate()}`
}

const lis = [
  {
    name: 'two',
    date: time(),
    description: 'a'
  },
  {
    name: 'one',
    date: time(),
    description: 'b'
  },
  {
    name: 'three',
    date: time(),
    description: 'c'
  }
]

const config: CONFIG = {
  name: 'Sorted List',
  render: sortedlist,
  prop: {
    config: lis
  },
  explain: md
};
export default config;
