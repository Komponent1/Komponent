import React from 'react'
import { Div } from './utlls';
import ContextMenu from './contextMenu/contextMenu';
import Scrollspy from './scrollspy/scrollspy';
import InfiniteScroll from './infiniteScroll/infiniteScroll';

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
  </div>
);

export default Main;
