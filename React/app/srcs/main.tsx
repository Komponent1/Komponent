import React, { useEffect, useState } from 'react';
import { 
  Routes,
  Route,
  useParam
} from 'react-router-dom';
import { ComponentList } from './config';

const Main = () => {
  return (
    <Routes>
      {Object.entries(ComponentList).map(([key, conf], i) => (
          <Route key={i} path={`${key}`} element={<conf.comp/>} />
      ))}
    </Routes>
  );
};

export default Main;
