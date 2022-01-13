import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Main from './main';

const App: React.FC = () => {
  useEffect(() => {
    
  }, []);  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
