import React from "react";

const RecipeDetail = ({ recipe, onClearSelection }) => {
  return (
    <div>
      <h2>Recipe Details</h2>
      <p>{recipe.strMeal}</p>
      <button onClick={onClearSelection}>Go Back to Recipes</button>
    </div>
  );
};
