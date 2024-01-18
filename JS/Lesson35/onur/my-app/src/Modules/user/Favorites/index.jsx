import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatchFavorites, useFavorites } from "../FavoritesProvider"
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

export const Favorites = () => {
    const theme = useTheme();

    const favorites = useFavorites();
    const dispatchFavorites = useDispatchFavorites();

    return (
        <>
            {favorites.length > 0 ? (
                <Box sx={{ marginTop: '1rem', padding: '1rem', height: '100vh' }}>
                    <Typography textAlign='center' variant="h6" mb={3}>My favorites meals</Typography>
                    <Grid container spacing={3} justifyContent='center'>
                        {favorites.map((favItem) => <FavoriteItem key={favItem.idMeal} favItem={favItem} />)}
                    </Grid>
                    <Button sx={{ position: 'absolute', bottom: '2rem', right: '2rem' }} variant="outlined" onClick={() => dispatchFavorites({ type: 'remove_all_favorites' })}>Remove All</Button>
                </Box >
            ) : (
                <Typography sx={{ height: '100vh', color: theme.palette.error.dark }} textAlign='center' variant="h6" mt={10}>You don't have any favorite food</Typography>
            )}
        </>
    )

}

const FavoriteItem = ({ favItem }) => {
    const theme = useTheme();
    const dispatchFavorites = useDispatchFavorites();

    return (
        <Grid item md={2}>
            <Card sx={{ '&:hover': { color: theme.palette.primary.light } }} >
                <CardContent>
                    <Typography variant='subtitle1'>{favItem.strMeal}</Typography>
                    <Typography variant='subtitle2'>{favItem.strArea}</Typography>
                    <Link to={`/recipes/${favItem.idMeal}`}>
                        <CardMedia
                            sx={{ height: { xs: '75px', md: '150px' }, borderRadius: '5px', '&:hover': { opacity: '0.7' } }}
                            component="img"
                            image={favItem.strMealThumb}
                        />
                    </Link>
                    <Button sx={{ marginTop: '5px' }} onClick={() => dispatchFavorites({ type: 'remove_favorite', payload: favItem })}>Remove</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}