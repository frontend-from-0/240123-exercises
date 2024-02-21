import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  const navigate = useNavigate();


  return (
    <div>
      <Typography variant="h5">Search Results</Typography>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.idMeal} >
            <Link to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {recipe.strMeal}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecipeList;
