import { List } from '../../components';
import md from '../../components/list/README.md';
import { CONFIG } from '../configType';

const time = () => {
  const raw = new Date();
  
  return `${raw.getFullYear()}/${raw.getMonth()}/${raw.getDate()}`
}

const lis = [
  {
    name: 'one',
    date: time(),
    description: 'bla'
  },
  {
    name: 'two',
    date: time(),
    description: 'blabla'
  },
  {
    name: 'three',
    date: time(),
    description: 'blablabla'
  }
]

const config: CONFIG = {
  name: 'List',
  comp: List,
  prop: {
    config: lis
  },
  explain: md
};
export default config;
