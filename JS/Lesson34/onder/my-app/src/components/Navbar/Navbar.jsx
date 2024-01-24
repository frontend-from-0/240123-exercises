import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" class="logo">Recipe App</NavLink>
      <ul class="nav-links">
        <li>
          <NavLink to="/create-recipe" activeClassName="active-link">Create Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" activeClassName="active-link">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" activeClassName="active-link">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/user-settings" activeClassName="active-link">User Settings</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;