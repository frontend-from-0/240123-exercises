import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";
const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <Link to={to}>{pageName}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <Link className="app__home" to="/">
        Home
      </Link>
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
