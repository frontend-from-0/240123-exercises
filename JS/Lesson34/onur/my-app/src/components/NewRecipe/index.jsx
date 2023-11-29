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
		reset,
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		strMeal: "", strDrinkAlternate: "", strCategoryOther: "", strArea: "", strCategory: "", strCreativeCommonsConfirmed: "",
		strImageSource: "", strSource: "", strTags: "", strYoutube: ""
	});

	const strCategory = watch('strCategory');

	const combinedPattern = /^(https:\/\/|\S+)$/;


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

		});
		delete processedData.measures


		processedData.dateModified = new Date().toString();

		reset();

		console.log(processedData);

	}

	return (
		<>
			<form
				className='new-recipe-form'
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>

				<label className='form-label' htmlFor='strMeal'>Meal Name :</label>
				<input
					className='form-input'
					id='strMeal'
					type='text'
					{...register('strMeal', { required: true, minLength: 2 })}
					placeholder='Please enter meal type...'
				/>
				{errors.strMeal && (
					<span className='input-error'>Meal name is required</span>
				)}

				<label className='form-label' htmlFor='strDrinkAlternate'>Drink Alternate :</label>
				<input
					className='form-input'
					id='strDrinkAlternate'
					type='text'
					{...register('strDrinkAlternate', { pattern: /\S+/ })}
				/>

				<label className='form-label' htmlFor='strCategory'>Meal Category :</label>
				<select
					className='form-input'
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
						className='form-input'
						type='text'
						{...register('	', { required: true, minLength: 2 })}
						placeholder='Please enter category...'
					/>
				)}

				<label className='form-label' htmlFor='strArea'>Area Name :</label>
				<input
					className='form-input'
					id='strArea'
					type='text'
					{...register('strArea', { required: true, minLength: 2 })}
				/>
				{errors.strArea && (
					<span className='input-error'>Area name is required</span>
				)}

				<label className='form-label' htmlFor='strInstructions'>Instructions :</label>
				<textarea
					className='form-input'
					id='strInstructions'
					{...register('strInstructions', { required: true, minLength: 10 })}
				></textarea>
				{errors.strInstructions && (
					<span className='input-error'>Instructions are required</span>
				)}

				<label className='form-label' htmlFor="strMealThumb">Meal Thumb :</label>
				<input type="text" id='strMealThumb' className='form-input' {...register("strMealThumb", {
					required: true,
					pattern: /\.(jpg|jpeg)$/
				})} />
				{errors.strMealThumb && (
					<span className='input-error'>Please enter a valid URL</span>
				)}

				<label className='form-label' htmlFor='strTags'>Tag Name :</label>
				<input
					className='form-input'
					id='strTags'
					type='text'
					{...register('strTags', { required: true, minLength: 2 })}
				/>
				{errors.strTags && (
					<span className='input-error'>Tag name is required</span>
				)}

				<label className='form-label' htmlFor="strYoutube">Youtube video :</label>
				<input type="text" id='strYoutube' className='form-input' {...register("strYoutube", {
					required: true,
					pattern: /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
				})} />
				{errors.strYoutube && (
					<span className='input-error'>Please enter a valid Youtube URL</span>
				)}

				<label className='form-label'>Ingredients : </label>
				<textarea className='form-input' placeholder='Please separate by commas' {...register("ingredients", { required: true, minLength: 1 })} />
				{errors.ingredients && (
					<span className='input-error'>Ingredients are required</span>
				)}

				<label className='form-label'>Measures : </label>
				<textarea className='form-input' placeholder='Please separate by commas' {...register("measures", { required: true, minLength: 1 })} />
				{errors.measures && (
					<span className='input-error'>Measures is required</span>
				)}

				<label className='form-label' htmlFor="strSource">Source :</label>
				<input className='form-input' type="text" id='strSource' {...register("strSource", {
					required: true,
					pattern: /^https:\/\//
				})} />
				{errors.strSource && (
					<span className='input-error'>Please enter a valid  address</span>
				)}

				<label className='form-label' htmlFor="strImageSource">Image source :</label>
				<input className='form-input' type="text" id='strImageSource' {...register("strImageSource", { pattern: combinedPattern })} />

				<div className='form-checkbox'>
					<label className='form-label' htmlFor="strCreativeCommonsConfirmed">Creative Commons :</label>
					<input className='form-checkbox-input' type="checkbox" id='strCreativeCommonsConfirmed' {...register("strCreativeCommonsConfirmed")} />
				</div>



				<button className='form-btn' type='Submit'>Submit</button>
			</form>
		</>
	);
};
