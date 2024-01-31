import { useState } from "react";
import { RecipeDetail } from "../RecipeDetail";

export const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleClick(recipe) {
    setSelectedRecipe(recipe);
  }

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id} onClick={() => handleClick(recipe)}>
              {recipe.strMeal}
            </li>
          );
        })}
      </ul>
      <RecipeDetail recipe={selectedRecipe} />
    </div>
  );
};
