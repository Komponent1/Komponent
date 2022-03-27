import React from 'react';
import { 
  Routes,
  Route
} from 'react-router-dom';
import { componentList } from './config';
import * as style from './style';
import { Div } from './utils';

const Home = () => (
  <div>
    <h1>HELLO! THIS IS KOMPONENT</h1>
    <p>Komponent는 Web개발에서 자주 사용되는 Component를 만들어보고 공유하는 플랫폼입니다</p>
  </div>
)

const Main = () => {
  return (
    <style.main>
      <Routes>
        <Route path='/' element={<Home />}/>
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
