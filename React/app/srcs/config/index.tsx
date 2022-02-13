import React from 'react';
import * as comp from '../components';
import * as util from '../utils';
import autocomplete from './autocomplete';

export const ComponentList = {
  autocomplete,
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
