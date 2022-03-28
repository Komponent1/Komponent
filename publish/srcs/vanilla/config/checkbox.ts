import { checkbox } from "../components"
import md from '../components/checkbox/README.md'
import { CONFIG } from "./configType";

const config: CONFIG = {
  name: 'Check Box',
  render: checkbox,
  prop: {
    init: false,
    setChecked: () => {}
  },
  explain: md
};

export default config;
