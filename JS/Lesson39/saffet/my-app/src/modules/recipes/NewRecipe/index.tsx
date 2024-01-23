import { useForm } from 'react-hook-form';
import './styles.css';
import { Category, allCategories } from '../models';

interface NewRecipe {
	strMeal: string;
	strDrinkAlternate?: string;
	strCategory: Category;
	strCategoryOther: string;
}

export const NewRecipe = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			strMeal: '',
			strDrinkAlternate: '',
			strCategory: Category.Undefined,
			strCategoryOther: '',
		},
	});

	const onSubmit = (data: NewRecipe) => console.log(data);

	return (
		<form
			className='new-recipe-form'
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<label htmlFor='strMeal'>Meal name</label>
			<input
				required
				id='strMeal'
				type='text'
				{...register('strMeal', { required: true })}
				placeholder='Please enter meal type...'
			/>
			{errors.strMeal && (
				<span className='input-error'>Meal name is required</span>
			)}

			<label htmlFor='strDrinkAlternate'>Drink alternate</label>
			<input
				id='strDrinkAlternate'
				type='text'
				{...register('strDrinkAlternate')}
			/>

			<label htmlFor='strCategory'> Meal category</label>
			<select
				id='strCategory'
				{...register('strCategory', { required: true, minLength: 1 })}
			>
				{allCategories.map((category) => {
					if (category === Category.Undefined) {
						return (
							<option key={category} value={category}>
								Select category
							</option>
						);
					} else {
						return (
							<option key={category} value={category}>
								{category}
							</option>
						);
					}
				})}
			</select>
			{errors.strCategory && (
				<span className='input-error'>Category is required</span>
			)}

			<button type='submit'>Submit</button>
		</form>
	);
};
