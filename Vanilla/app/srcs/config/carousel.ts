import { carousel } from "../components"
import { makeDummyElem } from "../utils"
import md from '../components/carousel/README.md'
import { CONFIG } from "./configType";

const config: CONFIG = {
  name: 'Carousel',
  render: carousel,
  prop: {
    elems: makeDummyElem()
  },
  explain: md
};

export default config;
