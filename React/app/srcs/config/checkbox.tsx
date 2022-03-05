import React, { useState } from 'react';
import { Checkbox } from '../components'
import { CONFIG } from './configType'
import md from '../components/checkbox/README.md';

const hook = () => {
  
}


const config: CONFIG = {
  name: 'Check Box',
  comp: (
    () => {
      const [checked, setCheck] = useState(false);
      return (
        <>
          <Checkbox checked={checked} setCheck={() => setCheck(!checked)} />
        </>
      )
    }
  ),
  prop: {},
  explain: md
};

export default config;
