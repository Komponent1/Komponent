import React from 'react';
import { Link } from 'react-router-dom';
import { ComponentList } from './config';
import * as style from './style';

const Menu = () => (
  <style.menu>
    {Object.entries(ComponentList).map(([key, conf], i) => (
      <li key={i}><Link to={`${key}`}>{conf.name}</Link></li>
    ))}
  </style.menu>
);

export default Menu;
