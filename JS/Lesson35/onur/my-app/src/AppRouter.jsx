import { Routes, Route } from 'react-router-dom'
import { NewRecipe } from './modules/recipes/NewRecipe'
import { SignInPage } from './modules/user/SignInPage'
import { SignUpPage } from './modules/user/SignUpPage'
import { RecipeList } from './modules/recipes/RecipeList'
import { SearchBar } from './modules/recipes/SearchBar'
import { RecipeDetail } from './modules/recipes/RecipeDetail'

export const AppRouter = () => {
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
						<SearchBar />
						<RecipeList />
					</>
				}
			/>
		</Routes>
	)
}
