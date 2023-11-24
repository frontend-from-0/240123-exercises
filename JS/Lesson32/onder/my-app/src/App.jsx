import './App.css';
import { useEffect, useState } from 'react';
import {BD_SEARCH_BASE_URL} from './urls.js';
import {RecipeList} from './components/RecipeList';
import {SearchBar} from './components/SearchBar';


export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

    // If you want to keep both initial recipes and recipes from search  on the screen at the same time use code below:
  // const [searchResult, setSearchResult] = useState([]);

  // Runs once of component render (component render = "sayfanin yenilenmesi")
  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then(response => response.json())
      .then(data => setRecipes(data.meals));
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClearSelection = () => {
      setSelectedRecipe(null);
  };


  // If you want to keep both initial recipes and recipes from search  on the screen at the same time use code below:
  // useEffect(() => {
  //   setRecipes(prevState => {
  //     // compare searchResult with prevState of recipes
  //     // only add values from searchResult array that are not present in the prevState array (recipes)
  //   });

  // },[recipes, searchResult]);
  
	return (
		<div className='container'>
      <SearchBar setRecipes={setRecipes} />
      {/* Conditionally render RecipeDetail if a recipe is selected, otherwise render RecipeList */}
      {selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} onClearSelection={handleClearSelection} />
      ) : (
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      )}
    </div>
	);
};

