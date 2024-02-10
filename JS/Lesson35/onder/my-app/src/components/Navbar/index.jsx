import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './UserContext'; // Import the UserContext
import './styles.css';

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext); // Access the loggedIn and setLoggedIn functions from UserContext

  const handleSignOut = () => {
    // Perform sign-out action here
    setLoggedIn(false); // Update loggedIn state to false
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Recipe App
      </NavLink>
      <ul className="nav-links">
        {/* Always show these links */}
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        {/* Show these links only when user is not logged in */}
        {!loggedIn && (
          <>
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
          </>
        )}
        {/* Show these links only when user is logged in */}
        {loggedIn && (
          <>
            <li>
              <NavLink to="/create-recipe" activeClassName="active-link">
                Create Recipe
              </NavLink>
            </li>
            <li>
              <NavLink to="/user-settings" activeClassName="active-link">
                User Settings
              </NavLink>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
