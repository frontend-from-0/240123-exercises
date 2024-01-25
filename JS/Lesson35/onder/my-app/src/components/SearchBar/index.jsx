import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const SearchBar = ({ setRecipes }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
        setValue("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
