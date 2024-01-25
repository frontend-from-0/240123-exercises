import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< Updated upstream
import { Typography, Button, CircularProgress, Container, Paper } from '@mui/material';
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h4" className="heading">
          Recipe Details
        </Typography>
        <div className="image-content">
          <img className="recipe-thumbnail" src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="text-content">
          <Typography variant="h5">{recipe.strMeal}</Typography>
          <Typography variant="body1">{recipe.strInstructions}</Typography>
          <Button onClick={onClearSelection} variant="contained" color="primary">
            Go Back to Recipes
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default RecipeDetail;
=======
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
>>>>>>> Stashed changes
