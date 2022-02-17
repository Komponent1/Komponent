import React from 'react'
import { DragablePannel } from '../components'
import { CONFIG } from './configType'
import md from '../components/dragablepannel/README.md';


const config: CONFIG = {
  name: 'Dragable Pannel',
  comp: DragablePannel,
  prop: {
    children: (<div style={{ width: '30px', height: '30px', background: 'black'}} />)
  },
  explain: md
};

export default config;
