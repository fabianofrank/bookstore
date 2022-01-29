import React from 'react';
import { Link } from 'react-router-dom';
import user from '../user.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav">
        <h1>Bookstore CMS</h1>
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </div>
      <img id="user" src={user} alt="user" />
    </nav>
  </header>
);

export default Navbar;
