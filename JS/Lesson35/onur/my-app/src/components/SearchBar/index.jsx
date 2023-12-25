import React from 'react'
import { Autocomplete, Box, IconButton, TextField } from '@mui/material'
import { useState } from 'react';
import { Search, YoutubeSearchedFor } from '@mui/icons-material';
export const SearchBar = ({ setRecipes }) => {
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


  return (
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
          <YoutubeSearchedFor fontSize='large' sx={{ color: 'primary.light' }} />
        </IconButton>
      </Box>

    </form>
  )
}
