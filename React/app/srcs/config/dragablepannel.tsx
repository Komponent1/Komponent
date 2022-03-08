import React from 'react'
import { DragablePannel } from '../components'
import { CONFIG } from './configType'
import md from '../components/dragablepannel/README.md';

const config: CONFIG = {
  name: 'Dragable Pannel',
  comp: DragablePannel,
  prop: {
    children: [
      <div key={1} style={{ width: '200px', height: '100px', background: 'black', borderRadius: '10px'}} />,
      <div key={2} style={{ width: '250px', height: '100px', background: 'blue', borderRadius: '10px'}} />,
      <div key={3} style={{ width: '220px', height: '120px', background: 'red', borderRadius: '10px' }} />,
      <div key={4} style={{ width: '240px', height: '100px', background: 'green', borderRadius: '10px' }} />,
    ]
  },
  explain: md
};

export default config;
