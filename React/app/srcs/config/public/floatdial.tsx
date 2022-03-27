import React from 'react';
import { Floatdial } from '../../components';
import md from '../../components/floatdial/README.md';
import { fetcher } from '../../utils';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'Float Dial',
  comp: Floatdial,
  prop: {
    config: [
      {
        icon: '1',
        type: 'text',
        tip: 'this is tip'
      },
      {
        icon: '2',
        type: 'text',
      }
    ]
  },
  explain: md
};

export default config;