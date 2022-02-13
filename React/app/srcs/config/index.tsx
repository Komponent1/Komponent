import React from 'react';
import * as comp from '../components';
import * as util from '../utils';
import autocomplete from './autocomplete';
import buttoncarousel from './buttoncarousel';
import carousel from './carousel';
import contextmenu from './contextmenu';

export const ComponentList = {
  autocomplete,
  buttoncarousel,
  carousel,
  contextmenu,
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
