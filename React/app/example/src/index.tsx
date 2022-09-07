import React from 'react';
import ReactDOM from 'react-dom';
import * as DIST from '../../dist';

function App() {
  return (
    <DIST.Loading />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
