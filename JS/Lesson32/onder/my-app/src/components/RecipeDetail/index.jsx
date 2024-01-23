import React from "react";
import './styles.css';

export const RecipeDetail = ({ recipe, onClearSelection }) => {
  return (
    <div className="recipe-details-container">
      <h2 className="heading">Recipe Details</h2>
      <div className="image-content">
        <img className="recipe-thumbnail" src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="text-content">
        <p>{recipe.strMeal}</p>
        <p>{recipe.strInstructions}</p>
        <button onClick={onClearSelection}>Go Back to Recipes</button>
      </div>
    </div>
  );
};
