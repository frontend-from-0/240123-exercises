import { Link } from 'react-router-dom';

export const RecipeList = ({ recipes }) => {
	return (
		<div>
			<h2>Search Results</h2>
			<ul>
				{recipes.map((recipe) => {
					return (
						<li key={recipe.idMeal}>
							<Link to={`recipes/${recipe.idMeal}`}>{recipe.strMeal}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
