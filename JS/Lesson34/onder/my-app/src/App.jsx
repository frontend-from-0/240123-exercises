import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { BD_SEARCH_BASE_URL } from "./urls.js";
import { RecipeList } from "./components/RecipeList";
import { SearchBar } from "./components/SearchBar";
import { NewRecipe } from "./components/NewRecipe";
import Navbar from "./components/Navbar/Navbar.jsx";
import  RecipeDetail  from './components/RecipeDetail';
import { Link } from "react-router-dom";

export const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals));
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <SearchBar setRecipes={setRecipes} />
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/create-recipe" element={<NewRecipe />} />
          <Route path="/" exact element={<RecipeList recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
};
