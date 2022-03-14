import React from 'react';
import * as style from './style';

type Prop = {
  type?: 'linearspin' | 'delayspin' | 'line'
}

const Loading = ({ type = 'linearspin' }: Prop) => {
  return (
    <style.div>
      <style.lines>
        <style.line delay={0} />
        <style.line delay={0.2} />
        <style.line delay={0.4} />
      </style.lines>
    </style.div>
  )
};

export default Loading;
