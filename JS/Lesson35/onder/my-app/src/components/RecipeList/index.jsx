import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div>
      <Typography variant="h5">Search Results</Typography>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} button onClick={() => onRecipeClick(recipe)}>
            {recipe.strMeal}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecipeList;
