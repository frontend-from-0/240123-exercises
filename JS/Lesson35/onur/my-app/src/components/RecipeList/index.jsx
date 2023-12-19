import { Link } from 'react-router-dom';
import './styles.css'

export const RecipeList = ({ recipes }) => {
	return (
		<div className='recipe-list-container'>
			<h2>Recipes</h2>
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
