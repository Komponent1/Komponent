import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Main from './main';
import Test from './test';

const App: React.FC = () => {
  useEffect(() => {
    
  }, []);  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react" element={<Main />}/>
        <Route path="/react/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
