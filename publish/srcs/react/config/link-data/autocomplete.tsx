import { AutoComplete } from '../../components';
import { fetcher } from '../../utils';
import md from '../../components/autocomplete/README.md';
import { CONFIG } from '../configType';

const dummies = [
  'aaabbb', 'aaaaaa', 'aaccc', 'bbbccc'
]
const config: CONFIG = {
  name: 'Autocomplete',
  comp: AutoComplete,
  prop: {
    fetcher: async () => await fetcher(dummies),
    placeholder: '"aaa", "bbb" 등이 입력되어 있습니다'
  },
  explain: md
};
export default config;
