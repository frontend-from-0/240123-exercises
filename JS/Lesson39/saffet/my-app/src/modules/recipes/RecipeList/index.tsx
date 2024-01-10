import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './styles.css';
import { Recipe } from '../models';

interface RecipeListProps {
	recipes: Recipe[];
}

export const RecipeList = ({recipes}: RecipeListProps) => {
	return (
		<div>
			<Typography variant='h3' sx={{ textAlign: 'center' }}>
				Recipes
			</Typography>
			<ul className='recipe-list'>
				{recipes.map((recipe) => {
					return (
						<li key={recipe.idMeal}>
							<Link to={`recipes/${recipe.idMeal}`} className='recipe-link'>
								<Card className='card'>
									<CardMedia
										sx={{ height: 100 }}
										image={recipe.strMealThumb}
										title={recipe.strMeal}
									/>
									<CardContent>
										<Typography gutterBottom variant='subtitle1' component='div'>
											{recipe.strMeal}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size='small'>View</Button>
									</CardActions>
								</Card>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
