
export const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onRecipeClick(recipe)}>
            {recipe.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};