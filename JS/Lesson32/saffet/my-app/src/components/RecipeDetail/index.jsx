export const RecipeDetail = ({recipe}) => {

    console.log(recipe);
    if(!recipe){
        return;
    }

    return(
        <>
            <h3>Recipe Details</h3>
            <h4>{recipe.strMeal}</h4>
            <p>{recipe.strInstructions}</p>
        </>
    )
}