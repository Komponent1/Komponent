import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Tooltip } from '../../component';
import { useTooltip, Tip } from '../../component/tooltip';

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { onAppear, onDisappear } = useTooltip('test', ref);

  return (
    <div>
      <Tooltip
        tip="test"
        position="left"
        style={{
          position: 'absolute',
          top: 100,
          left: 100,
        }}
      >
        <div style={{ width: 20, height: 20, background: 'black' }}/>
      </Tooltip>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
