import React from 'react'
import { Div } from './utlls';
import ContextMenu from './contextMenu/contextMenu';

const Main = () => (
  <div>
    <Div title={'ContextMenu'}>
      <ContextMenu num={5} />
    </Div>
  </div>
);

export default Main;
