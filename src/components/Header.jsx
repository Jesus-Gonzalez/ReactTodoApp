import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <header>
    <h1>React(ing) fun</h1>
    <span>Links:</span>
    <ul>
      <li><Link to="/">Index</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/funny-cats">Some funny cats</Link></li>
    </ul>
  </header>
);

export default Header;
