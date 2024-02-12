import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const RecipeDetail = ({ onClearSelection }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data based on the id from the URL
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          console.error('Recipe not found');
          // Handle the case where the recipe is not found, e.g., redirect to a 404 page
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

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

export default RecipeDetail;