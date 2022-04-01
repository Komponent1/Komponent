import { slidecarousel } from "../../components"
import { makeDummyElem } from "../../utils"
import md from '../../components/slidecarousel/README.md'
import { CONFIG } from "../configType";

const config: CONFIG = {
  name: 'Slide Carousel',
  render: slidecarousel,
  prop: {
    elems: makeDummyElem(),
    width: '400px',
    height: '200px',
  },
  explain: md
};

export default config;
