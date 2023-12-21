import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname });

  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <NavLink to={to} exact={true} activeClassName="active">
        {pageName}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <NavLink className="app__home" to="/" exact activeClassName="active">
        Home
      </NavLink>
      <ul className="nav__list">
        <CustomLink to="/new-recipe" pageName="New Recipe" />
        <CustomLink to="/sign-in" pageName="Sign-in" />
        <CustomLink to="/sign-up" pageName="Sign-up" />
        <CustomLink to="/settings" pageName="User Settings" />
      </ul>
    </nav>
  );
};

export default Navbar;
