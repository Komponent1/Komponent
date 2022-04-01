import React from 'react';
import { Tip } from '../../components'
import { CONFIG } from '../configType'
import md from '../../components/tip/README.md'

const elem: React.FC = () => (
  <div style={{ width: '15px', height: '15px', background: 'rgb(172, 172, 172)', borderRadius: '3px' }} />
);

const config: CONFIG = {
  name: 'Tip',
  comp: Tip,
  prop: {
    children: elem(),
    text: 'this is tip'
  },
  explain: md
};

export default config;
