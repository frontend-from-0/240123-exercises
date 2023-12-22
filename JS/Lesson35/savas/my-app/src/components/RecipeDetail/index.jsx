import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    if (id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => setRecipe(data.meals[0]));
    }
  }, [id]);

  return recipe ? (
    <div>Recipe Detail: {recipe.strMeal}</div>
  ) : (
    <div>Loading...</div>
  );
};
