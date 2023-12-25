import { Box, Button, Checkbox, FormControlLabel, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form"
import { StyledBox } from '../SignInPage'



export const NewRecipe = () => {

	const combinedPattern = /^(https:\/\/|\S+)$/;


	const form = useForm({
		defaultValues: {
			strMeal: '',
			strDrinkAlternate: '',
			strCategoryOther: '',
			strArea: '',
			strCategory: '',
			strCreativeCommonsConfirmed: '',
			strImageSource: '',
			strSource: '',
			strTags: '',
			strYoutube: '',
		}
	});

	const { register, handleSubmit, formState, reset } = form;

	const { errors } = formState;

	const onSubmit = (data) => {

		const processedData = { ...data };

		const ingredientsArray = data.ingredients.split(",").map((ingredient) => ingredient.trim());
		ingredientsArray.map((ingredient, index) => {
			for (let i = 1; i <= 20; i++) {
				if (ingredient.trim().length > 0 && (i <= ingredientsArray.length)) {
					processedData[`strIngredient${index + 1}`] = ingredient;
				} else {
					processedData[`strIngredient${i}`] = "";
				}
			}
			return null;
		});
		delete processedData.ingredients;

		const measuresArray = data.measures.split(",").map((ingredient) => ingredient.trim());
		measuresArray.map((measure, index) => {
			for (let i = 1; i <= 20; i++) {
				if (measure.trim().length > 0 && (i <= measuresArray.length)) {
					processedData[`strMeasure${index + 1}`] = measure;
				} else {
					processedData[`strMeasure${i}`] = "";
				}
			}
			return null;
		});
		delete processedData.measures


		processedData.dateModified = new Date().toString();

		reset();

		console.log(processedData);
	};

	return (
		<StyledBox>
			<Box sx={{ margin: '30px auto', maxWidth: '100%', '&:hover': { color: 'primary.light' } }}>
				<Typography gutterBottom textAlign='center' variant="h4">Add a new recipe</Typography>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<Stack spacing={2} sx={{ width: { xs: '250px', sm: '500px' } }}>

						<TextField label='Meal Name' type="text"
							{...register('strMeal', {
								required: {
									value: true,
									message: 'Meal name is required!'
								},
								minLength: 2,
							})}
							error={!!errors.strMeal}
							helperText={errors.strMeal?.message}
						/>

						<TextField label='Drink Alternate' type="text"
							{...register('strDrinkAlternate', {
								pattern: {
									value: /\S+/,
								}
							})}
							error={!!errors.strDrinkAlternate}
							helperText={errors.strDrinkAlternate?.message}
						/>

						<TextField label='Select meal category' select
							defaultValue=''
							{...register('strCategory', {
								required: {
									value: true,
									message: 'Please select your meal category'
								}
							})}
							error={!!errors.strCategory}
							helperText={errors.strCategory?.message}
						>
							<MenuItem value=""></MenuItem>
							<MenuItem value="side">Side</MenuItem>
							<MenuItem value="main">Main</MenuItem>
							<MenuItem value="dessert">Dessert</MenuItem>
						</TextField>

						<TextField label='Area Name' type="text"
							{...register('strArea', {
								required: {
									value: true,
									message: 'Area name is required!'
								},
								minLength: 2,
							})}
							error={!!errors.strArea}
							helperText={errors.strArea?.message}
						/>

						<TextField label='Instructions' type="text"
							{...register('strInstructions', {
								required: {
									value: true,
									message: 'Please enter instructions!'
								},
								minLength: 10,
							})}
							error={!!errors.strInstructions}
							helperText={errors.strInstructions?.message}
						/>


						<TextField label='Meal Thumb' type="text"
							{...register('strMealThumb', {
								required: {
									value: true,
									message: 'Please include a photo of your food !'
								},
								pattern: {
									value: /\.(jpg|jpeg)$/,
									message: 'Please enter a valid address'
								}
							})}
							error={!!errors.strMealThumb}
							helperText={errors.strMealThumb?.message}
						/>

						<TextField label='Tag Name' type="text"
							{...register('strTags', {
								required: {
									value: true,
									message: 'Tag name is required!'
								},
								minLength: 2,
							})}
							error={!!errors.strTags}
							helperText={errors.strTags?.message}
						/>

						<TextField label='Youtube video address' type="text"
							{...register('strYoutube', {
								required: {
									value: true,
									message: 'Please add a YouTube video showing the preparation of your meal.'
								},
								pattern: {
									value: /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
									message: 'Please enter a valid address'
								}
							})}
							error={!!errors.strYoutube}
							helperText={errors.strYoutube?.message}
						/>

						<TextField label='Ingredients' type="text"
							{...register('ingredients', {
								required: {
									value: true,
									message: 'Please enter the ingredients!'
								},
								minLength: 2,
							})}
							error={!!errors.ingredients}
							helperText={errors.ingredients?.message}
						/>

						<TextField label='Measures' type="text"
							{...register('measures', {
								required: {
									value: true,
									message: 'Please enter the measures!'
								},
								minLength: 2,
							})}
							error={!!errors.measures}
							helperText={errors.measures?.message}
						/>

						<TextField label='Source' type="text"
							{...register('strSource', {
								required: {
									value: true,
									message: 'Please enter your source!'
								},
								pattern: {
									value: /^https:\/\//,
									message: 'Please enter a valid address'
								},
								minLength: 2,
							})}
							error={!!errors.strSource}
							helperText={errors.strSource?.message}
						/>

						<TextField label='Image source' type="text"
							{...register('strImageSource', {
								required: {
									value: true,
									message: 'Please enter the image source!'
								},
								pattern: {
									value: combinedPattern,
									message: 'Please enter a valid value'
								},
								minLength: 2,
							})}
							error={!!errors.strImageSource}
							helperText={errors.strImageSource?.message}
						/>

						<FormControlLabel
							label='Creative Commons'
							control={
								<Checkbox {...register('strCreativeCommonsConfirmed')} />}
						/>

						<Button sx={{ backgroundColor: 'primary.light', '&:hover': { backgroundColor: 'primary.main' } }} type='submit' variant="contained" color="success"  >ADD</Button>
					</Stack>
				</form>
			</Box>
		</StyledBox>
	)
}
