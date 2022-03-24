/* layout of component */
import slidecarousel from './layout/slidecarousel';
import changecarousel from './layout/changecarousel';
import contextmenu from './layout/contextmenu';
import infinitescroll  from './layout/infinitescroll';
import licontextmenu from './layout/licontextmenu';
import scrollspy from './layout/scrollspy';
import tab from './layout/tab';
import list from './layout/list';
import dragablepannel from './layout/dragablepannel';
import parallexscroll from './layout/parallexscroll';
import sortedlist from './layout/sortedlist';
const LAYOUT = {
  slidecarousel, changecarousel, contextmenu, infinitescroll, licontextmenu, scrollspy, tab, list, dragablepannel, parallexscroll, sortedlist
}

/* data-link of component */
import autocomplete from './link-data/autocomplete';
import badge from './link-data/badge';
import pointline from './link-data/pointline';
import rating from './link-data/rating';
import chips from './link-data/chips';
const DATA_LINK = {
  autocomplete, badge, pointline, rating, chips
}

/* public of component */
import btnmenu from './public/btnmenu';
import checkbox from './public/checkbox';
import togglemenu from './public/togglemenu';
import slider from './public/slider';
import button from './public/button';
import onoffswitch from './public/onoffswitch';
import dropdown from './public/dropdown';
import scrollnav from './public/scrollnav';
import radiobutton from './public/radiobutton';
import tip from './public/tip';
import floatdial from './public/floatdial';
import loading from './public/loading';
import filterdropdown from './public/filterdropdown';
import opendrawer from './public/opendrawer';
const PUBLIC = {
  opendrawer, btnmenu, checkbox, togglemenu, slider, button, onoffswitch, dropdown, scrollnav, radiobutton, tip, floatdial, loading, filterdropdown
}


export const componentList = {
  ...PUBLIC, ...LAYOUT, ...DATA_LINK
};
export const categoryList = {
  PUBLIC, LAYOUT, DATA_LINK
}
