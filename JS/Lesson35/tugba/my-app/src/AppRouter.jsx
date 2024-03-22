import React from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import { NewRecipe } from "./components/NewRecipe";
import UserSettings from "./components/UserSettings";
import RecipeDetail from "./components/RecipeDetail";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRouter = ({ recipes, setRecipes }) => {
  const handleClearSelection = () => {
    // Implement navigation logic here
    console.log("Navigate back to recipe list");
  };

  return (
    <Routes>
      <Route path="/user-settings" element={<UserSettings />} />{" "}
      {/* Add route for UserSettings */}
      <Route path="/about" element={<div>About page</div>} />
      <Route path="/recipes">
        <Route path="new" element={<NewRecipe />} />
        <Route
          path=":id"
          element={<RecipeDetail onClearSelection={handleClearSelection} />}
        />
        <Route
          path=":id/edit"
          element={<div>Example Edit Recipe component</div>}
        />
        <Route index element={<div>Recipes routes</div>} />
      </Route>
      <Route
        path="/"
        element={
          <>
            <SearchBar setRecipes={setRecipes} />
            <RecipeList recipes={recipes} />
          </>
        }
      />
      {/* Redirect to the home page if the entered URL does not match any route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
