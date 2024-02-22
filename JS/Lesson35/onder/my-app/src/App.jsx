import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import { BD_SEARCH_BASE_URL } from './urls.js';
import { NewRecipe } from './components/NewRecipe';
import Navbar from './components/Navbar/index.jsx';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import About from './components/About'


export const App = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch(BD_SEARCH_BASE_URL)
			.then((response) => response.json())
			.then((data) => setRecipes(data.meals));
	}, []);

	return (
		<>
			<CssBaseline />
			<Navbar />
			<Container component='main' maxWidth='lg'>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<SearchBar setRecipes={setRecipes} />
					</Grid>
					<Grid item xs={12}>
						<Routes>
							<Route
								path='/recipe/:id'
								element={<RecipeDetail recipes={recipes} />}
							/>
							<Route path='/create-recipe' element={<NewRecipe />} />
							<Route
								path='/'
								exact
								element={<RecipeList recipes={recipes} />}
							/>
							<Route path="/about" element={<About />} />
						</Routes>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default App;
