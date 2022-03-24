import { contextMenu } from '../../components'
import { CONFIG } from '../configType'
import md from '../../components/contextMenu/README.md'


const config: CONFIG = {
  name: 'Context Menu',
  render: contextMenu,
  prop: {
    config: [
      {
        menu: '1번 메뉴',
        context: '1번 context'
      },
      {
        menu: '2번 메뉴',
        context: '2번 context'
      },
      {
        menu: '3번 메뉴',
        context: '3번 context'
      },
      {
        menu: '4번 메뉴',
        context: '4번 context'
      },
      {
        menu: '5번 메뉴',
        context: '5번 context'
      }
    ]
  },
  explain: md
};

export default config;
