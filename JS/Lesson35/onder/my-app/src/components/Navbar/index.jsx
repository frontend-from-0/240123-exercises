
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
          <NavLink to="/create-recipe" activeClassName="active-link">
            Create Recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin" activeClassName="active-link">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active-link">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-settings" activeClassName="active-link">
            User Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;