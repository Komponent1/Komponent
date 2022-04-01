import { SlideCarousel } from "../../components"
import { makeDummyComps } from "../../utils"
import md from '../../components/slidecarousel/README.md'
import { CONFIG } from "../configType";

const config: CONFIG = {
  name: 'Slide Carousel',
  comp: SlideCarousel,
  prop: {
    children: makeDummyComps('400px', '200px'),
    width: '400px',
    height: '200px'
  },
  explain: md
};

export default config;
