import { slidecarousel } from "../components"
import { makeDummyElem } from "../utils"
import md from '../components/slidecarousel/README.md'
import { CONFIG } from "./configType";

const config: CONFIG = {
  name: 'Slide Carousel',
  render: slidecarousel,
  prop: {
    elems: makeDummyElem()
  },
  explain: md
};

export default config;
