import React from 'react';
import { 
  Routes,
  Route
} from 'react-router-dom';
import { ComponentList } from './config';
import * as style from './style';
import { Div } from './utlls';

const Main = () => {
  return (
    <style.main>
      <Routes>
        {Object.entries(ComponentList).map(([key, conf], i) => (
            <Route key={i} path={`${key}`}
              element={
                <Div title={conf.name}>
                  <conf.comp {...conf.prop}/>
                </Div>
              }/>
        ))}
      </Routes>
    </style.main>
  );
};

export default Main;
