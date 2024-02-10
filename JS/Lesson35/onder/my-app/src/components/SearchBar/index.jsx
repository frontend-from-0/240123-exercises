import React, { useState, useContext } from 'react';
import { RecipeContext } from './RecipeContext'; 

const SearchBar = () => {
  const [value, setValue] = useState('');
  const { setRecipes } = useContext(RecipeContext); 

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals); 
        } else {
          setRecipes([]);
        }
        setValue('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(event) => setValue(event.target.value)} value={value} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
