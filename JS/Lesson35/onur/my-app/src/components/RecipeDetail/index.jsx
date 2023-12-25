import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Box, Card, Grid, ImageListItem, List, Paper, Typography } from '@mui/material'

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
                    ingredientsArray.push(`${measure} ~ ${ingredient}`)
                }
            }

            setIngredients(ingredientsArray);
        }
    }, [recipe])

    return (

        <Grid container p={2} >
            <Grid item xs={12} md={3} >
                <Paper elevation={6} sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: 'center', gap: '10px' }}>
                    <Box>
                        <Typography sx={{ textAlign: 'center', margin: '20px 0' }} variant="h5">{recipe.strMeal}</Typography>
                        <ImageListItem sx={{ maxWidth: '350px', maxHeight: '350px', minWidth: '200px', margin: '0 20px' }}>
                            <img style={{ borderRadius: '10px' }} src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </ImageListItem>
                    </Box>
                    <Box mb={1}  >
                        <Typography mb={0.6} variant="h6">Ingredients : </Typography>
                        {ingredients.map(ingredient => (
                            <List key={ingredient}>{ingredient}</List>
                        ))}
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box elevation={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <Box mb={2} >
                        <Typography variant="h5" sx={{ textAlign: 'center', margin: '20px 0' }}>Recipe Detail</Typography>
                        <Typography variant="body1" sx={{ fontStyle: 'italic', padding: '5px', marginLeft: '5px' }} >{recipe.strInstructions}</Typography>
                    </Box>
                    <Card>
                        {recipe.strYoutube && (
                            <iframe
                                style={{ borderRadius: '10px' }}
                                width="700"
                                height="400"
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>

                        )}
                    </Card>
                </Box>
            </Grid>
        </Grid>

    )
}