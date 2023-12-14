export const RecipeList = ({recipes, onRecipeClick}) => {
	return (
		<div>
			<h2>Search Results</h2>
			<ul>
				{recipes.map((recipe) => {
					return <li key={recipe.idMeal} onClick={() => onRecipeClick(recipe)}>{recipe.strMeal}</li>
				})}
			</ul>
		</div>
	);
};

