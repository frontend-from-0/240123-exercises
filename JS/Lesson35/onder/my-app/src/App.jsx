import React, { useEffect, useState } from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import { BD_SEARCH_BASE_URL } from "./urls.js";
import Navbar from "./components/Navbar/index.jsx";
import { AppRouter } from "./AppRouter.jsx";
import {CreateRecipe} from './components/CreateRecipe'; 

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
      <Container component="main" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppRouter recipes={recipes} setRecipes={setRecipes}/>
            {/* Render the CreateRecipe component */}
            <CreateRecipe />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
