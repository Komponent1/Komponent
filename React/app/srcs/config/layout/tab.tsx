import React from 'react';
import { Tab } from '../../components'
import { DummyComp } from '../../utils'
import { CONFIG } from '../configType'
import md from '../../components/tab/README.md'

const Item: React.FC = ({ text }) => (
  <DummyComp color='white' height='150px' width='500px'>
    <p>{text}</p>
  </DummyComp>
);
const dummies = [
  <Item key={1} text='This is Tab 1'/>,
  <Item key={2} text='This is Tab 2'/>,
  <Item key={3} text='This is Tab 3'/>
]

const config: CONFIG = {
  name: 'Tab',
  comp: Tab,
  prop: {
    titles: ['Tab1', 'Tab2', 'Tab3'],
    children: dummies
  },
  explain: md
};

export default config;
