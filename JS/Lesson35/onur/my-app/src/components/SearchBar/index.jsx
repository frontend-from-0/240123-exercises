import React from 'react'
import { Autocomplete, Box, Button, ButtonGroup, IconButton, Stack, TextField } from '@mui/material'
import { useState } from 'react';
import { YoutubeSearchedFor } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles'
import { useRecipes } from '../../Modules/recipes/RecipesProvider';

export const SearchBar = ({ setRecipes }) => {
  const theme = useTheme();

  const recipeContext = useRecipes();


  const [searchValue, setSearchValue] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      const searchName = recipeContext.map(recipe => recipe.strMeal)
        .filter(recipe => recipe.toLowerCase().includes(searchValue.toLowerCase()))
      // console.log('Search Name: ,', searchName)
      if (searchName) {
        const filteredRecipe = recipeContext.filter(recipe => recipe.strMeal.toLowerCase().includes(searchValue.toLowerCase()))
        setRecipes(filteredRecipe)
      }
    }
    setSearchValue('')

  }

  const mealNames = recipeContext.map(recipe => recipe.strMeal)

  const categoryButtonNames = ['Side', 'Seafood', 'Beef', 'Vegetarian', 'Pasta', 'Pork', 'Dessert', 'Miscellaneous', 'Lamb', 'Chicken']


  const handleCategory = (category) => {
    if (category === 'All') {
      setRecipes(recipeContext)
    } else {
      const selectedCategory = recipeContext.filter(recipe => recipe.strCategory === category);
      setRecipes(selectedCategory);
    }
  }

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
