import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
<<<<<<< Updated upstream

const RecipeList = ({ recipes, onRecipeClick }) => {
=======
import { Link, useNavigate } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  const navigate = useNavigate();

  const onRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
    console.log(`Clicked on recipe: ${recipe.strMeal}`);
  };

>>>>>>> Stashed changes
  return (
    <div>
      <Typography variant="h5">Search Results</Typography>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} button onClick={() => onRecipeClick(recipe)}>
<<<<<<< Updated upstream
            {recipe.strMeal}
=======
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {recipe.strMeal}
            </Link>
>>>>>>> Stashed changes
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecipeList;
