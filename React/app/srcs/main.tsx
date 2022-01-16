import React from 'react'
import { Div } from './utlls';
import ContextMenu from './contextMenu/contextMenu';
import Scrollspy from './scrollspy/scrollspy';

const Main = () => (
  <div>
    <Div title={'ContextMenu'}>
      <ContextMenu num={5} />
    </Div>
    <Div title={'Scrollspy'}>
      <Scrollspy num={5}/>
    </Div>
  </div>
);

export default Main;
