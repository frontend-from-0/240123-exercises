import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Box, Button, Card, Grid, ImageListItem, List, Paper, Typography } from '@mui/material'
import { useRecipes } from "../RecipesProvider";
import { Recipe } from "../models";
import { useDispatchFavorites } from "../../user/FavoritesProvider";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useUserContext } from "../../user/UserProvider";
import { useTheme } from '@mui/material'

export const RecipeDetail = () => {

    const theme = useTheme();

    const userContext = useUserContext();

    const recipes = useRecipes();

    let { id } = useParams();

    const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

    useEffect(() => {

        const abortCont = new AbortController();

        if (id) {
            const currentRecipe: Recipe[] = recipes.filter(recipe => recipe.idMeal === id);
            if (currentRecipe.length > 0) {
                setRecipe(currentRecipe[0])
            }
        } else {
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
        }


        return () => abortCont.abort();
    }, [id, recipes]);

    const [ingredients, setIngredients] = useState<string[]>([]);

    useEffect(() => {

        if (recipe) {
            const ingredientsArray: string[] = [];
            for (let i = 1; i <= 20; i++) {
                const ingredientKey = `strIngredient${i}` as keyof Recipe;
                const measureKey = `strMeasure${i}` as keyof Recipe;

                const ingredient: string | undefined = recipe[ingredientKey];
                const measure: string | undefined = recipe[measureKey];

                if ((ingredient && measure) && (ingredient.trim().length > 0 && measure.trim().length > 0)) {
                    ingredientsArray.push(`${measure} ~ ${ingredient}`)
                }
            }

            setIngredients(ingredientsArray);
        }
    }, [recipe]);


    const dispatchFavorites = useDispatchFavorites();

    const [wasAdd, setWasAdd] = useState(false);

    const handleAddFavorite = () => {
        dispatchFavorites({ type: 'add_favorite', payload: [recipe] });
        setWasAdd(true);
    }


    return (

        <Grid container p={2} >
            <Grid item xs={12} md={3} >
                <Paper elevation={6} sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: 'center', gap: '10px' }}>
                    <Box>
                        <Typography sx={{ textAlign: 'center', margin: '20px 0' }} variant="h5">{recipe?.strMeal}</Typography>
                        <ImageListItem sx={{ maxWidth: '350px', maxHeight: '350px', minWidth: '200px', margin: '0 20px' }}>
                            <img style={{ borderRadius: '10px' }} src={recipe?.strMealThumb} alt={recipe?.strMeal} />
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
                <Box component='div' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <Box mb={2} >
                        {(userContext.loggedIn) ?
                            <Button
                                endIcon={wasAdd ? <Favorite sx={{ color: theme.palette.error.dark }} /> : <FavoriteBorder />}
                                sx={{ marginLeft: '10px', marginTop: '10px' }}
                                onClick={handleAddFavorite}>Add to my favorites</Button> : null}

                        <Typography variant="h5" sx={{ textAlign: 'center', margin: '20px 0' }}>Recipe Detail</Typography>
                        <Typography variant="body1" sx={{ fontStyle: 'italic', padding: '5px', marginLeft: '5px' }} >{recipe?.strInstructions}</Typography>
                    </Box>
                    <Card>
                        {recipe?.strYoutube && (
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
