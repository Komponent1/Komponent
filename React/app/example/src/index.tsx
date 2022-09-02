import React from 'react';
import ReactDOM from 'react-dom';
import * as style from './style';
import * as DIST from '../../dist'

const App: React.FC = () => {
  return (
    <>
      <style.global />
      <DIST.Loading></DIST.Loading>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
