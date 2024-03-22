import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Container, Grid } from "@mui/material";
import { GlobalProvider } from "./Context/GlobalState";
import Navbar from "./components/Navbar/index";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import About from "./components/About";
import { SignIn, SignUp } from "./components/Auth/signIn";
import UserSettings from "./components/UserSettings";

const App = () => {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Routes>
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/create-recipe" element={<NewRecipe />} />
              <Route path="/" element={<RecipeList />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/user-settings" element={<UserSettings />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </GlobalProvider>
  );
};

export default App;
