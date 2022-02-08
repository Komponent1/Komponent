import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import * as style from './style';

import Menu from './menu';
import Main from './main';

const App: React.FC = () => {
  return (
    <style.layout>
      <BrowserRouter basename='/react'>
        <Menu />
        <Main />
      </BrowserRouter>
    </style.layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
