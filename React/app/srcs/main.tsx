import React from 'react';
import { 
  Routes,
  Route
} from 'react-router-dom';
import { componentList } from './config';
import * as style from './style';
import { Div } from './utils';

const codestyle = {
  display: 'block',
  width: '500px',
  padding: '30px 20px',
  fontSize: '1rem',
  background: 'rgba(172, 172, 172, 0.5)',
  borderRadius: '5px'
}

const Home = () => (
  <div>
    <h1>HELLO! THIS IS KOMPONENT</h1>
    <p>Komponent는 Web개발에서 자주 사용되는 Component를 만들어보고 공유하는 플랫폼입니다</p>

    <p>ver 0.1은 Vanilla와 React가 분리되지 않은 초기 테스트 버전입니다.</p>
    <code style={codestyle}>
        npm i @seolim/kompoent
    </code>
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
