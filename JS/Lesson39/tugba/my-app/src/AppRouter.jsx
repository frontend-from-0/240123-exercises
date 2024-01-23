import { RecipeList } from './modules/recipes/RecipeList';
import { SearchBar } from './modules/recipes/SearchBar';
import { NewRecipe } from './modules/recipes/NewRecipe';
import {UserPage} from './modules/user/UserPage';
import { RecipeDetail } from './modules/recipes/RecipeDetail';
import { Routes, Route } from 'react-router-dom';
import {StyledPaper} from './components/StyledPaper';

export const AppRouter = ({ recipes, setRecipes }) => {
	return (
		<Routes>

			<Route path='/user' >
				<Route path='log-in' element={<StyledPaper>Log in page</ StyledPaper>} />
				<Route path='sign-up' element={<StyledPaper>Sign up page</ StyledPaper>} />

        <Route index element={<UserPage/>}></Route>
			</Route>

			<Route path='/recipes' >
				<Route path='new' element={<NewRecipe />} />
				<Route path=':id' element={<RecipeDetail />} />

        <Route index element={<div>Recipes routes</div>}></Route>
			</Route>

			<Route
				path='/'
				element={
					<StyledPaper>
						<SearchBar setRecipes={setRecipes} />
						<RecipeList recipes={recipes} />
					</StyledPaper>
				}
			/>
		</Routes>
	);
};
