import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter
} from 'react-router-dom';
import * as style from './style';
import 'highlight.js/styles/atom-one-dark.css';

import Menu from './menu';
import Main from './main';
import Header from './header';

const App: React.FC = () => {
  return (
    <>
      <style.global />
      <BrowserRouter basename='/react'>
        <Header />
        <Menu />
        <Main />
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
