<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Container, CssBaseline, Typography, Link, Grid } from '@mui/material';
import { BD_SEARCH_BASE_URL } from "./urls.js";
import { NewRecipe } from "./components/NewRecipe";
import Navbar from "./components/Navbar/Navbar.jsx";
=======
import React from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, CssBaseline, Typography, Link, Grid } from '@mui/material';
import { BD_SEARCH_BASE_URL } from './urls.js';
import { NewRecipe } from './components/NewRecipe';
import Navbar from './components/Navbar/index.jsx';
>>>>>>> Stashed changes
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

<<<<<<< Updated upstream


export const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals));
  }, []);

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchBar setRecipes={setRecipes} />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route
                path="/recipe/:id"
                element={<RecipeDetail recipes={recipes} />}
              />
              <Route path="/create-recipe" element={<NewRecipe />} />
              <Route
                path="/"
                exact
                element={<RecipeList recipes={recipes} />}
              />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
};

export default App;
=======

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
						</Routes>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default App;
>>>>>>> Stashed changes
