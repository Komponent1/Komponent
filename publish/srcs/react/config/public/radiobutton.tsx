import { RadioButton } from '../../components';
import md from '../../components/radiobutton/README.md';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'Radio Button',
  comp: RadioButton,
  prop: {
    labels: ['One', 'Two', 'Three'],
    setValue: (value: string) => {}
  },
  explain: md
};

export default config;