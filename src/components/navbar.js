import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav">
        <h1>Bookstore CMS</h1>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
      <img alt="graphic" />
    </nav>
  </header>
);

export default Navbar;
