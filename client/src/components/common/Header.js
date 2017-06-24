import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/" className="">Home</Link>
      {" | "}
      <Link to="/search" className="">Search</Link>
    </nav>
  );
};


export default Header;
