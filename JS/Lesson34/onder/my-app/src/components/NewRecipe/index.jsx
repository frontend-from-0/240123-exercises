import { useForm } from 'react-hook-form';
import './styles.css';

// const useMyHook = () => {
//   const myData = {id: 'xxxx', name:'Data name'};
//   const deleteMyData = () => {console.log('Deleting data...')};

//   return [ myData, deleteMyData ];
// }

export const NewRecipe = () => {
  // const [data,  setData] = useMyHook();

  // console.log(data);
  // setData();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const strCategory = watch('strCategory');

	const onSubmit = (data) => console.log(data);

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
				<option value=''>Select category</option>
				<option value='Side'>Side</option>
				<option value='Main'>Main</option>
				<option value='Dessert'>Dessert</option>
				<option value='Other'>Other</option>
			</select>
			{errors.strCategory && (
				<span className='input-error'>Category is required</span>
			)}
			{strCategory === 'Other' && (
				<input
					type='text'
					{...register('strCategoryOther', { required: true, minLength: 3 })}
					placeholder='Please enter category...'
				/>
			)}
				<label htmlFor='strInstructions'>Instructions</label>
      <textarea
        id='strInstructions'
        {...register('strInstructions', { required: true })}
        placeholder='Enter instructions...'
      />
			<label>Ingredients</label>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index}>
          <input
            type='text'
            {...register(`strIngredient${index + 1}`, { required: true })}
            placeholder={`Enter ingredient #${index + 1}...`}
          />
          {errors[`strIngredient${index + 1}`] && (
            <span className='input-error'>Ingredient is required</span>
          )}
        </div>
      ))}
			<button type='Submit'>Submit</button>
		</form>
	);
};
