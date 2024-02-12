import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  const navigate = useNavigate();

  const onRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
    console.log(`Clicked on recipe: ${recipe.strMeal}`);
  };

  return (
    <div>
      <Typography variant="h5">Search Results</Typography>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            onRecipeClick(recipe);
          }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {recipe.strMeal}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecipeList;
