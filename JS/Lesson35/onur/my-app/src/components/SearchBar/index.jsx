import React from 'react'
import { Autocomplete, Box, Button, ButtonGroup, IconButton, Stack, TextField } from '@mui/material'
import { useState } from 'react';
import { YoutubeSearchedFor } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles'

export const SearchBar = ({ setRecipes, originalRecipes }) => {
  const theme = useTheme();


  const [searchValue, setSearchValue] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const getUrl = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
        const data = await res.json();
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
        setSearchValue("");
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }
    getUrl();
  }

  const mealNames = ['Corba', 'Sushi', 'Burek', 'Bistek', 'Tamiya', 'Kumpir', 'Wontons', 'Lasagne', 'Kafteji', 'Big Mac', 'Poutine', 'Koshari', 'Dal fry', 'Timbits', 'Pancakes', 'Kapsalon', 'Fish pie', 'Flamiche', 'Shawarma', 'Kedgeree', 'Stamppot', 'Moussaka', 'Shakshuka', 'Sugar Pie', 'Ribollita'];

  const categoryButtonNames = ['Side', 'Seafood', 'Beef', 'Vegetarian', 'Pasta', 'Pork', 'Dessert', 'Miscellaneous', 'Lamb', 'Chicken']


  const handleCategory = (category) => {
    if (category === 'All') {
      setRecipes(originalRecipes)
    } else {
      const selectedCategory = originalRecipes.filter(recipe => recipe.strCategory === category);
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
            return <Button onClick={() => handleCategory(categoryName)}>{categoryName}</Button>
          })}
        </ButtonGroup>
      </Box>

    </Stack>
  )
}
