import './App.css';
import { useEffect, useState } from 'react';
import { BD_SEARCH_BASE_URL } from './urls.js';
import { RecipeList } from './components/RecipeList';
import { SearchBar } from './components/SearchBar';
import { RecipeDetail } from './components/RecipeDetail/index.jsx';


export const App = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    fetch(BD_SEARCH_BASE_URL)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.meals)
        console.log(data)
      })
      .catch(error => console.error('Request canceled!'));
  }, []);

  return (
    <div className='container'>
      <SearchBar setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};