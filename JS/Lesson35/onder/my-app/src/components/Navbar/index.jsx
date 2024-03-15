import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { GlobalContext } from "../../Context/GlobalState";

const Navbar = () => {
  const { setRecipesnew } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      if (data.meals) {
        setRecipesnew(data.meals);
      } else {
        setRecipesnew([]);
      }
      setSearchQuery("");
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

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
            Sign In / SignUp
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search recipes"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </ul>
    </nav>
  );
};

export default Navbar;
