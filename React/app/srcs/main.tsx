import React from 'react';
import { 
  Routes,
  Route
} from 'react-router-dom';
import { componentList } from './config';
import * as style from './style';
import { Div } from './utils';

const Main = () => {
  return (
    <style.main>
      <Routes>
        {Object.entries(componentList).map(([key, conf], i) => (
            <Route key={i} path={`${key}`}
              element={
                <Div conf={conf}>
                  <conf.comp {...conf.prop}/>
                </Div>
              }/>
        ))}
      </Routes>
    </style.main>
  );
};

export default Main;
