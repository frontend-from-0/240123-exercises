import './App.css';
import { useEffect, useState } from 'react';
import {BD_SEARCH_BASE_URL} from './urls.js';
import {RecipeList} from './components/RecipeList';
import {SearchBar} from './components/SearchBar';

export const App = () => {
  // 1. Fetch recipes data from an API (Get request, API key, useState to store data, useEffect)
  // 2. Display the data (RecipeList component -> use <ul> to display data)
  // 3. Search recipe (A new component SearchBar with a <form> element, text input, and submit functionality)

	const [recipes, setRecipes] = useState([]);
    // If you want to keep both initial recipes and recipes from search  on the screen at the same time use code below:
  // const [searchResult, setSearchResult] = useState([]);

  // Runs once of component render (component render = "sayfanin yenilenmesi")
  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
    .then(response => response.json())
    .then(data => setRecipes(data.meals));
  },[]);

  // If you want to keep both initial recipes and recipes from search  on the screen at the same time use code below:
  // useEffect(() => {
  //   setRecipes(prevState => {
  //     // compare searchResult with prevState of recipes
  //     // only add values from searchResult array that are not present in the prevState array (recipes)
  //   });

  // },[recipes, searchResult]);
  
	return (
		<div className='container'>
      <SearchBar setRecipes={setRecipes}/>
      <RecipeList recipes={recipes} />
		</div>
	);
};

