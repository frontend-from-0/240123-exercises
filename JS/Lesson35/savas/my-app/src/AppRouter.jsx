import "./AppRouter.css";
import { RecipeList } from "./components/RecipeList";
import { SearchBar } from "./components/SearchBar";
import { RecipeDetail } from "./components/RecipeDetail";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import { NewRecipe } from "./components/NewRecipe/index.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import { UserPage } from "./components/UserPage/index.jsx";

export const AppRouter = ({ recipes, setRecipes }) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/newrecipe" element={<NewRecipe />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/settings" element={<UserPage />} />
      <Route
        className="left-bar"
        path="/"
        element={
          <>
            <SearchBar setRecipes={setRecipes} className="search-bar" />
            <RecipeList recipes={recipes} className="recipe-list" />
          </>
        }
      />
      <Route path="/recipedetails" element={<RecipeDetail />} />
    </Routes>
  );
};
