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
      <Route path="/new-recipe" element={<NewRecipe />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/settings" element={<UserPage />} />
      <Route
        path="/"
        element={
          <div className="left-bar">
            <SearchBar setRecipes={setRecipes} />
            <RecipeList recipes={recipes} />
          </div>
        }
      />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
    </Routes>
  );
};
