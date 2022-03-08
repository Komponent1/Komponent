import { rating } from '../components'
import { CONFIG } from './configType'
import md from '../components/rating/README.md'

const config: CONFIG = {
  name: 'Rating',
  render: rating,
  prop: {
    style: 'star',

  },
  explain: md
};

export default config;
