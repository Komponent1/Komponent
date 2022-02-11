import carousel from './carousel';
import * as comp from '../components';
import * as util from '../utils';

export const componentList = {
  autocomplete: {
    name: 'Auto Complete',
    render: comp.autocomplete,
  },
  buttoncarousel: {
    name: 'Button Carousel',
    render: comp.buttonCarousel,
    prop: {
      elems: util.makeDummyElem()
    }
  },
  carousel,
  contextmenu: {
    name: 'Context Menu',
    render: comp.contextMenu,
    prop: {
      num: 5
    }
  },
  infinitescroll: {
    name: 'Infinite Scroll',
    render: comp.infiniteScroll,
  },
  liContextMenu: {
    name: 'li Context Menu',
    render: comp.liContextMenu,
    prop: {
      config: [
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
    }
  },
  scrollspy: {
    name: 'Scroll Spy',
    render: comp.scrollSpy,
    prop: {
      num: 5
    }
  },
  tab: {
    name: 'Tab',
    render: comp.tab,
  }
};