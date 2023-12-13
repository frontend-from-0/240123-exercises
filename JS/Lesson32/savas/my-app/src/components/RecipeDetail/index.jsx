import React from 'react';

export const RecipeDetail = ({recipe}) => {

  const ingredientsArray = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    if (ingredient) {
      ingredientsArray.push(ingredient);
    }
  }
  
  return (
    
    <div>
        <h2>{recipe.strMeal}</h2>
        <h3>Country: {recipe.strArea}</h3>
        <a href={recipe.strSource}>Original Recipe Link</a>
        <h3>Ingredients:</h3>
        <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        </ul>
        <h3>Meal Recipe:</h3>
        <p>{recipe.strInstructions}</p>
    </div>
  );
}

