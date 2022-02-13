import { autocomplete } from "../components"
import { fetcher } from "../utils"
import md from '../components/autocomplete/README.md'
import { CONFIG } from "./configType"

const dummies = [
  'aaabbb', 'aaaaaa', 'aaccc', 'bbbccc'
]
const config: CONFIG = {
  name: 'Autocomplete',
  render: autocomplete,
  prop: {
    fetcher: async () => await fetcher(dummies)
  },
  explain: md
}
export default config;
