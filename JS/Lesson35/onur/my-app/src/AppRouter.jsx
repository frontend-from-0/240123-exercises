import { Routes, Route } from 'react-router-dom'
import { NewRecipe } from './components/NewRecipe'
import { SignInPage } from './components/SignInPage'
import { SignUpPage } from './components/SignUpPage'
import { RecipeList } from './components/RecipeList'
import { SearchBar } from './components/SearchBar'
import { RecipeDetail } from './components/RecipeDetail'

export const AppRouter = ({ recipes, setRecipes }) => {
	return (
		<Routes>
			<Route path='/recipes' >
				<Route path='new' element={<NewRecipe />} />
				<Route path=':id' element={<RecipeDetail />} />
			</Route>
			<Route path='/signInPage' element={<SignInPage />} />
			<Route path='/signUpPage' element={<SignUpPage />} />
			<Route
				path='/'
				element={
					<>
						<SearchBar recipes={recipes}
							setRecipes={setRecipes}
						/>

						<RecipeList recipes={recipes} />
					</>
				}
			/>
		</Routes>
	)
}
