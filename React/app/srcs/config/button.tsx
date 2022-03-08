import { Button } from "../components"
import md from '../components/button/README.md'
import { CONFIG } from "./configType";

const config: CONFIG = {
  name: 'Button',
  comp: Button,
  prop: {
    text: 'BUTTON',
    click: () => {}
  },
  explain: md
};

export default config;
