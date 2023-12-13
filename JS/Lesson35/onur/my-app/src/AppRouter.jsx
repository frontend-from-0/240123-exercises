import { RecipeList } from './components/RecipeList';
import { SearchBar } from './components/SearchBar';
import { NewRecipe } from './components/NewRecipe';
import { UserPage } from './components/UserPage';
import { RecipeDetail } from './components/RecipeDetail';
import { Routes, Route } from 'react-router-dom';
import { SignInPage } from './components/SignInPage'
import { SignUpPage } from './components/SignUpPage'
import { UserSetting } from './components/UserSetting'

export const AppRouter = ({ recipes, setRecipes }) => {
	return (
		<Routes>
			<Route path='/user' element={<UserPage />} />

			<Route path='/about' element={<div>About page</div>} />
			<Route path='/recipes' >
				<Route path='new' element={<NewRecipe />} />
				<Route path=':id' element={<RecipeDetail />} />
				<Route
					path=':id/edit'
					element={<div>Example Edit Recipe component</div>}
				/>
				{/* Using 'index' parameter allow you to set a default component that should be displayed when /recipes url is being visited */}
				<Route index element={<div>Recipes routes</div>}></Route>
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
