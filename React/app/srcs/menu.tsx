import React from 'react';
import { Link } from 'react-router-dom';
import { ComponentList } from './config';
import * as style from './style';

const Menu = () => (
  <style.menu>
    <h1>Comp List</h1>
    {Object.entries(ComponentList).map(([key, conf], i) => (
      <style.li key={i}><Link to={`${key}`}>{conf.name}</Link></style.li>
    ))}
  </style.menu>
);

export default Menu;
