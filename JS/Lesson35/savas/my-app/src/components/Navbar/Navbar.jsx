import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";
const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <NavLink to={to}>{pageName}</NavLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <NavLink className="app__home" to="/">
        Home
      </NavLink>
      <ul className="nav__list">
        <CustomLink to="/newrecipe" pageName="New Recipe" />
        <CustomLink to="/signin" pageName="Sign-in" />
        <CustomLink to="/signup" pageName="Sign-up" />
        <CustomLink to="/settings" pageName="User Settings" />
      </ul>
    </nav>
  );
};

export default Navbar;
