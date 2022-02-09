import React from 'react';
import { 
  Routes,
  Route
} from 'react-router-dom';
import { ComponentList } from './config';
import * as style from './style';

const Div: React.FC = ({ name, children }) => (
  <div>
    <h1>{name}</h1>
    {children}
  </div>
);

const Main = () => {
  return (
    <style.main>
      <Routes>
        {Object.entries(ComponentList).map(([key, conf], i) => (
            <Route key={i} path={`${key}`}
              element={
                <Div name={conf.name}>
                  <conf.comp {...conf.prop}/>
                </Div>
              }/>
        ))}
      </Routes>
    </style.main>
  );
};

export default Main;
