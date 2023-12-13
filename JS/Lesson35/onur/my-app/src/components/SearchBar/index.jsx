
import { useState } from "react";
import './styles.css'

export const SearchBar = ({ setRecipes }) => {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then(response => response.json())
      .then(data => {
        // If any recipes are found, save them to the App component's recipes state
        if (data.meals) {
          setRecipes(data.meals);
          // If no recipes are found, reset the App component's recipes state 
          // Alternatively, you can remove the else clause to keep the old recipes on the screen
        } else {
          setRecipes([]);
        }
        setValue("");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input onChange={(event) => setValue(event.target.value)} value={value} type="text" />
      <button type="submit">Search</button>
    </form>
  )

};