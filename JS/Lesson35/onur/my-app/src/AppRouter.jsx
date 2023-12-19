import { RecipeList } from './components/RecipeList';
import { SearchBar } from './components/SearchBar';
import { NewRecipe } from './components/NewRecipe';
import { RecipeDetail } from './components/RecipeDetail';
import { Routes, Route } from 'react-router-dom';
import { SignInPage } from './components/SignInPage'
import { SignUpPage } from './components/SignUpPage'
import { UserSetting } from './components/UserSetting'

export const AppRouter = ({ recipes, setRecipes }) => {
	return (
		<Routes>
			<Route path='/recipes' >
				<Route path='new' element={<NewRecipe />} />
				<Route path=':id' element={<RecipeDetail />} />
			</Route>
			<Route path='/signInPage' element={<SignInPage />} />
			<Route path='/signUpPage' element={<SignUpPage />} />
			<Route path='/user/setting' element={<UserSetting />} />
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
