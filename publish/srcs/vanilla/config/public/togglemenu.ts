import { togglemenu } from "../../components"
import md from '../../components/togglemenu/README.md'
import { CONFIG } from "../configType"

const config: CONFIG = {
  name: 'Toggle Menu',
  render: togglemenu,
  prop: {
    init: 1,
    type: 'must',
    config: [
      {
        type: 'text',
        src: 't1',
        act: () => console.log(1)
      },
      {
        type: 'text',
        src: 't2',
        act: () => console.log(2)
      }
    ]
  },
  explain: md
}
export default config;