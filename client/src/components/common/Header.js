import React from 'react';
import { Link } from 'react-router-dom';

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
