import React from 'react';
import { Tab } from '../components'
import { DummyComp } from '../utils'
import { CONFIG } from './configType'
import md from '../components/tab/README.md'

const Item = ({ text }): React.FC => (
  <DummyComp color='white' height='200px'>
    {text}
  </DummyComp>
);
const dummies = [
  {
    title: 'Tab1',
    comp: <Item text='This is Tab 1'/>
  },
  {
    title: 'Tab2',
    comp: <Item text='This is Tab 2'/>
  },
  {
    title: 'Tab3',
    comp: <Item text='This is Tab 3'/>
  }
]

const config: CONFIG = {
  name: 'Tab',
  comp: Tab,
  prop: {
    tabs: dummies
  },
  explain: md
};

export default config;
