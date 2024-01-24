import { Box, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemButton, ListItemText, Skeleton, Typography } from '@mui/material'
import { MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles'
import { useRecipes } from '../RecipesProvider';



export const RecipeList = () => {

	const recipes = useRecipes();

	const theme = useTheme();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, []);

	return (
		<Grid container p={3} >
			<Grid item md={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
				<Box m='0 auto'>
					<List sx={{ marginLeft: { xs: '20px' }, maxWidth: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<MenuBook fontSize="large" sx={{ color: theme.palette.primary.main, margin: '10px 0' }} />
						{recipes.map((recipe) => {
							if (recipe.strMealThumb) {
								return (
									<div key={recipe.idMeal}>
										<ListItem disablePadding>
											<ListItemButton component={Link} to={`/recipes/${recipe.idMeal}`} sx={{ borderRadius: '5px', '&:hover': { backgroundColor: theme.palette.primary.main, color: theme.palette.mode === 'light' ? theme.palette.linkColor.main : theme.palette.linkColor.darker } }}>
												<ListItemText key={recipe.idMeal} primary={recipe.strMeal} />
											</ListItemButton>
										</ListItem>

									</div>
								)
							} else {
								return null
							}
						})}
					</List>
				</Box>
			</Grid>
			<Grid item xs={12} md={9} >
				<Grid container spacing={3} justifyContent='center' >
					{recipes.map((recipe) => {
						if (recipe.strMealThumb) {
							return (
								<Grid item md={3} key={recipe.idMeal}>
									<Card sx={{ '&:hover': { color: theme.palette.primary.light } }} >
										<CardContent>
											<Typography variant='subtitle1'>{recipe.strMeal}</Typography>
											<Typography variant='subtitle2'>{recipe.strArea}</Typography>
										</CardContent>
										{loading ? (
											<Skeleton
												variant='rectangular'
												sx={{ height: { xs: '150px', md: '300px' }, borderRadius: '5px' }}
												animation='wave' />
										) : (

											<Link to={`/recipes/${recipe.idMeal}`}>
												<CardMedia
													sx={{ height: { xs: '150px', md: '300px' }, borderRadius: '5px', '&:hover': { opacity: '0.7' } }}
													component="img"
													image={recipe.strMealThumb}
												/>
											</Link>
										)}
									</Card>
								</Grid>
							)
						} else {
							return null
						}
					})}

				</Grid>
			</Grid>
		</Grid >


	)
}
