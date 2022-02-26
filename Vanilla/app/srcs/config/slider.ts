import { slider } from '../components'
import { CONFIG } from './configType'
import md from '../components/slider/README.md'


const config: CONFIG = {
  name: 'Slider',
  render: slider,
  prop: {
    setValue: (value: number) => {},
    width: 150,
    init: 0.4
  },
  explain: md
};

export default config;
