export const RecipeList = ({recipes}) => {
	return (
		<div>
			<h2>Search Results</h2>
			<ul>
				{recipes.map((recipe) => {
					return <li key={recipe.id}>{recipe.strMeal}</li>
				})}
			</ul>
		</div>
	);
};
