import React from 'react';
import './Navbar.css'
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="logo" className="logo" />
      <ul>
  <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
  <li><NavLink to="/signup" activeClassName="active-link">Sign up</NavLink></li>
  <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
  <li><NavLink to="/contact" activeClassName="active-link">Contact us</NavLink></li>
</ul>

    </nav>
  );
};

export default NavBar;
