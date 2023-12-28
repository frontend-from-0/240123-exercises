import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <NavLink className="app__home" to="/" exact activeClassName="active">
        Home
      </NavLink>
      <ul className="nav__list">
        <NavLink
          to="/new-recipe"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          New Recipe
        </NavLink>
        <NavLink
          to="/sign-in"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Sign-in
        </NavLink>
        <NavLink
          to="/sign-up"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Sign-up
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          User Settings
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
