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
          <NavLink to="/create-recipe">
            Create Recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-settings">
            User Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;