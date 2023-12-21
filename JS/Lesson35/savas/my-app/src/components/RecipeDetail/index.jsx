import * as React from "react";
import { useState, useEffect } from "react";

export const RecipeDetail = (id) => {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    if (id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => setRecipe(data.meals[0]));
    }
  }, [id]);

  return <div>Recipe Detail: {recipe}</div>;
};
