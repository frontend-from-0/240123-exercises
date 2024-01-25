import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  const history = useHistory();
  const onRecipeClick = (recipe) => {
    history.push(`/recipe/${recipe.id}`);
    console.log(`Clicked on recipe: ${recipe.strMeal}`);
    
  };

  return (
    <div>
      <Typography variant="h5">Search Results</Typography>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} button onClick={() => onRecipeClick(recipe)}>
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
