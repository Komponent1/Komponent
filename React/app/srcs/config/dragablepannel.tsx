import React from 'react'
import { DragablePannel } from '../components'
import { CONFIG } from './configType'
import md from '../components/dragablepannel/README.md';


const config: CONFIG = {
  name: 'Dragable Pannel',
  comp: DragablePannel,
  prop: {
    children: [
      <div key={1} style={{ width: '50px', height: '80px', background: 'black'}} />,
      <div key={2} style={{ width: '80px', height: '50px', background: 'blue'}} />
    ]
  },
  explain: md
};

export default config;
