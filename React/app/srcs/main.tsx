import React from 'react'
import { Div } from './utlls';
import ContextMenu from './contextMenu/contextMenu';
import Scrollspy from './scrollspy/scrollspy';
import InfiniteScroll from './infiniteScroll/infiniteScroll';
import Tab from './Tab/tab';

const Main = () => (
  <div>
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
