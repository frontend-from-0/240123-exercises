import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import  {CreateRecipe}  from './components/CreateRecipe';
import UserPage from './components/UserPage';
import RecipeDetail from './components/RecipeDetail';
import { Routes, Route } from 'react-router-dom';


export const AppRouter = ({ recipes, setRecipes }) => {
  return (
    <Routes>
      <Route path='/user' element={<UserPage />} />
      <Route path='/about' element={<div>About page</div>} />
      <Route path='/recipes'>
        <Route path='new' element={<CreateRecipe />} />
        <Route path=':id' element={<RecipeDetail />} />
        <Route path=':id/edit' element={<div>Example Edit Recipe component</div>} />
        {/* Using 'index' parameter allow you to set a default component that should be displayed when /recipes url is being visited */}
        <Route index element={<div>Recipes routes</div>} />
      </Route>
     
      <Route
        path='/'
        element={
          <>
            <SearchBar setRecipes={setRecipes} />
            <RecipeList recipes={recipes} />
          </>
        }
      />
    </Routes>
  );
};
