import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'


export const RecipeDetail = () => {

    let { id } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {

        const abortCont = new AbortController();

        const getURL = async () => {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, { signal: abortCont.signal });
                const data = await res.json();
                if (data.meals) return setRecipe(data.meals[0])
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getURL();

        return () => abortCont.abort();
    }, [id]);
    console.log(recipe)

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {

        if (recipe) {
            const ingredientsArray = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];

                if (ingredient && (ingredient.trim().length > 0 && measure.trim().length > 0)) {
                    ingredientsArray.push(`${measure} ${ingredient}`)
                }
            }

            setIngredients(ingredientsArray);
        }
    }, [recipe])

    return (
        <>
            <div className='detail-container' key={recipe.idMeal}>
                <div className='detail-left'>
                    <h2>{recipe.strMeal}</h2>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
                <div className='detail-right'>
                    <h2>Recipe Detail</h2>
                    <p>{recipe.strInstructions}</p>
                    <div className='detail-ingredients'>
                        <h4>Ingredients : </h4>
                        {ingredients.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};