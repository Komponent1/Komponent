import { carousel } from "../components"
import { makeDummyElem } from "../utils"
import md from '../components/carousel/README.md'

export default {
  name: 'Carousel',
  render: carousel,
  prop: {
    elems: makeDummyElem()
  },
  explain: md
}