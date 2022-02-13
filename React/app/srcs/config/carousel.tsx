import { Carousel } from "../components"
import { makeDummyComps } from "../utils"
import md from '../components/carousel/README.md'
import { CONFIG } from "./configType";

const config: CONFIG = {
  name: 'Carousel',
  comp: Carousel,
  prop: {
    children: makeDummyComps()
  },
  explain: md
};

export default config;
