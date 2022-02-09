import React from 'react';
import * as comp from './components';
import * as util from './utlls';


type Comp = {
  name: string,
  comp: React.FC,
  prop?: Object
}
type CompList= {
  [key in string]: Comp
}
export const ComponentList: CompList = {
  autocomplete: {
    name: 'Auto Complete',
    comp: comp.AutoComplete,
    prop: {
      placeholder: '~~를 입력해주세요',
      fetcher: async () => util.fetcher([ 'aaa', 'aab', 'bbb'])
    }
  },
  buttoncarousel: {
    name: 'Button Carousel',
    comp: comp.ButtonCarousel,
    prop: {
      children: util.makeDummyComps()
    }
  },
  carousel: {
    name: 'Carousel',
    comp: comp.Carousel,
    prop: {
      children: util.makeDummyComps()
    }
  },
  contextmenu: {
    name: 'Context Menu',
    comp: comp.ContextMenu,
    prop: {
      num: 5
    }
  },
  infinitescroll: {
    name: 'Infinite Scroll',
    comp: comp.InfiniteScroll,
  },
  scrollspy: {
    name: 'Scroll Spy',
    comp: comp.Scrollspy,
    prop: {
      num: 5
    }
  },
  tab: {
    name: 'Tab',
    comp: comp.Tab
  }
  
};
