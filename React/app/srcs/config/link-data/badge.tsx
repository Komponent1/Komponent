import React from 'react';
import { Badge } from '../../components';
import md from '../../components/badge/README.md';
import { fetcher } from '../../utils';
import { CONFIG } from '../configType';

const config: CONFIG = {
  name: 'Badge',
  comp: Badge,
  prop: {
    children: (<div style={{ width: '20px', height: '20px', border: '1px solid rgba(172, 172, 172, 0.5)'}}/>),
    fetcher: async () => await fetcher(5)
  },
  explain: md
};

export default config;