import React from 'react';

export const RecipeDetail = ({recipe}) => {
  return (
    
    <div>
        <h2>{recipe.strMeal}</h2>
        <h3>Country: {recipe.strArea}</h3>
        <a href={recipe.strSource}>Original Recipe Link</a>
        <h3>Ingredients:</h3>
        <ul>
            <li>{recipe.strIngredient1}</li>
            <li>{recipe.strIngredient2}</li>
            <li>{recipe.strIngredient3}</li>
            <li>{recipe.strIngredient4}</li>
            <li>{recipe.strIngredient5}</li>
            <li>{recipe.strIngredient6}</li>
            <li>{recipe.strIngredient7}</li>
            <li>{recipe.strIngredient8}</li>
            <li>{recipe.strIngredient9}</li>
            <li>{recipe.strIngredient10}</li>
            <li>{recipe.strIngredient11}</li>
            <li>{recipe.strIngredient12}</li>
            <li>{recipe.strIngredient13}</li>
        </ul>
        <h3>Meal Recipe:</h3>
        <p>{recipe.strInstructions}</p>
    </div>
  );
}

