import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Recipe App
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/create-recipe" activeClass="active-link">
            Create Recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin" activeClass="active-link">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClass="active-link">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-settings" activeClass="active-link">
            User Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClass="active-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
