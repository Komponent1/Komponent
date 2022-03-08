import { LiContextMenu } from '../components'
import { CONFIG } from './configType'
import md from '../components/liContextMenu/README.md'

const datas = [
  {
    name: 'menu1',
    act: () => console.log('menu1 work')
  },
  {
    name: 'menu2',
    li: [
      {
        name: 'submenu1',
        act: () => console.log('submenu1 work')
      },
      {
        name: 'submenu2',
        li: [
          {
            name: 'subsubemenu1',
            act: () => console.log('subsubemnu1 work')
          }
        ]
      }
    ]
  },
  {
    name: 'menu3',
    li: [
      {
        name: 'submenu3',
        act: () => console.log('submenu3 work')
      }
    ]
    
  }
]

const config: CONFIG = {
  name: 'Li Context Menu',
  comp: LiContextMenu,
  prop: {
    config: datas
  },
  explain: md
};

export default config;