import { ToggleMenu } from "../components"
import md from '../components/togglemenu/README.md'
import { CONFIG } from "./configType"

const config: CONFIG = {
  name: 'Toggle Menu',
  comp: ToggleMenu,
  prop: {
    config: [
      {
        type: 'text',
        src: 't1',
        act: () => alert(1)
      },
      {
        type: 'text',
        src: 't2',
        act: () => alert(2)
      }
    ]
  },
  explain: md
}
export default config;