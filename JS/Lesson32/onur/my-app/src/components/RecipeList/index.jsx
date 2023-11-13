import { useState } from "react";
import { RecipeDetail } from "../RecipeDetail";
import './styles.css'


export const RecipeList = ({ recipes }) => {

	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const selectRecipe = (recipe) => {
		setSelectedRecipe(recipe);
	}
	const handleCloseRecipeDetail = () => {
		setSelectedRecipe(null);
	}


	return (
		<div className="list-container">
			<div className="main">
				<h2>Recipes</h2>
				<ul>
					{recipes.map((recipe) => {
						return <li key={recipe.idMeal} onClick={() => selectRecipe(recipe)}>{recipe.strMeal}</li>
					})}
				</ul>
			</div>
			<div className="detail">
				{selectedRecipe ? <RecipeDetail closeRecipe={handleCloseRecipeDetail} selected={selectedRecipe} /> : null}
			</div>
		</div>
	);
};
