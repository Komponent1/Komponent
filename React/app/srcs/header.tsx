import React from 'react';
import * as style from './style';
import { Link } from 'react-router-dom';

const Header = () => (
  <style.header>
    <style.title><Link to='/'>Komponent</Link></style.title>
  </style.header>
);

export default Header;
