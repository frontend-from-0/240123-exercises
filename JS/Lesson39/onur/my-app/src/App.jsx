import './App.css';
import { useEffect, useState } from 'react';
import { BD_SEARCH_BASE_URL } from './urls';
import Box from '@mui/material/Box';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Navbar } from './components/Navbar';
import { useRecipesDispatch } from './modules/recipes/RecipesProvider';
import { RecipeActionType } from './modules/recipes/models';
import {UserProvider} from './modules/user/UserProvider';

export const App = () => {
	const [recipes, setRecipes] = useState([]);
	const dispatch = useRecipesDispatch();

	useEffect(() => {
		fetch(BD_SEARCH_BASE_URL)
			.then((response) => response.json())
			.then((data) => {
				if (data.meals) {
					setRecipes(data.meals);
					dispatch({type: RecipeActionType.ADD_RECIPES, payload: data.meals});
				}
			});
	}, []);

	return (
		<div className='app-container'>
			<ThemeProvider theme={theme}>
				<UserProvider>
				<Navbar />
					<Box sx={{ mt: theme.spacing(10) }}>
						<AppRouter recipes={recipes} setRecipes={setRecipes} />
					</Box>
				</UserProvider>
			</ThemeProvider>
		</div>
	);
};
