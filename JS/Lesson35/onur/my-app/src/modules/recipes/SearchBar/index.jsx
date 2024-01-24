import { Autocomplete, Box, Button, ButtonGroup, IconButton, Stack, TextField } from '@mui/material'
import { useEffect, useState } from 'react';
import { YoutubeSearchedFor } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles'
import { useRecipesDispatch } from '../RecipesProvider';
import { RecipeActionType } from '../models';

export const SearchBar = () => {

  const theme = useTheme();

  const dispatch = useRecipesDispatch();

  const [searchValue, setSearchValue] = useState('');

  const [recipesApi, setRecipesApi] = useState([]);


  useEffect(() => {
    const abortCont = new AbortController();

    const getURL = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`, {
          signal: abortCont.signal,
        });
        const data = await res.json();
        if (data.meals) {
          setRecipesApi(data.meals);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getURL();

    return () => abortCont.abort();
  }, [searchValue]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.length > 0) {

      const filteredRecipe = recipesApi.filter(recipe => recipe.strMeal.toLowerCase().includes(searchValue.toLowerCase()))

      dispatch({ type: RecipeActionType.SEARCH_RECİPE, payload: filteredRecipe });
    } else {
      dispatch({ type: RecipeActionType.SEARCH_RECİPE, payload: recipesApi });
    }
    setSearchValue('')

  };

  const mealNames = recipesApi.map(recipe => recipe.strMeal);

  const categoryButtonNames = ['Side', 'Seafood', 'Beef', 'Vegetarian', 'Pasta', 'Pork', 'Dessert', 'Miscellaneous', 'Lamb', 'Chicken'];


  const handleCategory = (category) => {
    if (category === 'All') {
      dispatch({ type: RecipeActionType.SEARCH_RECİPE, payload: recipesApi });
    } else {
      const selectedCategory = recipesApi.filter(recipe => recipe.strCategory === category);
      dispatch({ type: RecipeActionType.SEARCH_RECİPE, payload: selectedCategory });
    }
  };

  return (
    <Stack spacing={2} >
      <Box>
        <form onSubmit={handleSubmit} style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
          <Box sx={{ width: { xs: '70%', sm: '50%' } }}>
            <Autocomplete
              freeSolo
              disableClearable
              options={mealNames.map((recipe) => recipe)}
              inputValue={searchValue}
              onInputChange={(e, newValue) => {
                setSearchValue(newValue);
                e.preventDefault()
              }}

              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Recipe"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Box>
          <Box>
            <IconButton type="submit" aria-label="search">
              <YoutubeSearchedFor fontSize='large' sx={{ color: theme.palette.primary.light }} />
            </IconButton>
          </Box>
        </form>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <Button variant='outlined' onClick={() => handleCategory('All')}>All Meals</Button>
        <ButtonGroup sx={{ display: { md: 'flex', xs: 'none' } }} variant='text' size='medium' color='primary' >
          {categoryButtonNames.map((categoryName) => {
            return <Button key={categoryName} onClick={() => handleCategory(categoryName)}>{categoryName}</Button>
          })}
        </ButtonGroup>
      </Box>

    </Stack>
  )
}
