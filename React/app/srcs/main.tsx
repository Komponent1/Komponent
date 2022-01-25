import React from 'react'
import { Div } from './utlls';
import ContextMenu from './contextMenu/contextMenu';
import Scrollspy from './scrollspy/scrollspy';
import InfiniteScroll from './infiniteScroll/infiniteScroll';
import Tab from './Tab/tab';
import Carousel, { makeDummyElement } from './carousel/carousel';

const Main = () => (
  <div>
    <Div title={'Carousel'}>
      <Carousel>
        {makeDummyElement('red')}
        {makeDummyElement('black')}
        {makeDummyElement('blue')}
        {makeDummyElement('grey')}
      </Carousel>
    </Div>
    <Div title={'ContextMenu'}>
      <ContextMenu num={5} />
    </Div>
    <Div title={'Scrollspy'}>
      <Scrollspy num={5}/>
    </Div>
    <Div title={'Infinite Scroll'}>
      <InfiniteScroll />
    </Div>
    <Div>
      <Tab />
    </Div>
  </div>
);

export default Main;
