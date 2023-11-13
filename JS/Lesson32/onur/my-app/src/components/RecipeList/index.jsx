import { useState } from "react";
import { RecipeDetail } from "../RecipeDetail";
import './styles.css'


export const RecipeList = ({ recipes }) => {

	const [recipe, setRecipe] = useState(false);
	const [SelectedRecipe, setSelectedRecipe] = useState(null);

	const selectRecipe = (recipe) => {
		setRecipe(true);
		setSelectedRecipe(recipe);
	}

	return (
		<div className="list-container">
			<div className="main">
				<h2>Search Results</h2>
				<ul>
					{recipes.map((recipe) => {
						return <li key={recipe.idMeal} onClick={() => selectRecipe(recipe)}>{recipe.strMeal}</li>
					})}
				</ul>
			</div>
			<div className="detail">
				{recipe && <RecipeDetail selected={SelectedRecipe} />}
			</div>
		</div>
	);
};
