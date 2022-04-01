import { radiobutton } from '../../components'
import { CONFIG } from '../configType'
import md from '../../components/radiobutton/README.md'

const config: CONFIG = {
  name: 'Radio Button',
  render: radiobutton,
  prop: {
    labels: ['one', 'two', 'three'],
    setValue: (value: string) => {}
  },
  explain: md
};

export default config;
