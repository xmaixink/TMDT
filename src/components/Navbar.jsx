// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/contactpage">Contact</Link>
        <Link to="/product">Products</Link>


      </div>
      <div className="search-container">
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>

      </div>
    </nav>
  );
};

export default Navbar;
