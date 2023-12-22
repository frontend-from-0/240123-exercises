import { useForm } from 'react-hook-form';
import './styles.css';

export const NewRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      strMeal: '',
      strDrinkAlternate: '',
      strCategory: '',
      strCategoryOther: '',
      strInstructions: '', 
      strIngredientsAndMeasurements: '',
    },
  });

  const strCategory = watch('strCategory');

  const onSubmit = (data) => {
   
    const ingredientsAndMeasurements = data.strIngredientsAndMeasurements.split(',').map(item => item.trim());

    
    console.log({
      ...data,
      ingredientsAndMeasurements,
    });
  };

  return (
    <form
      className='new-recipe-form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <label htmlFor='strMeal'>Meal name</label>
      <input
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

      <label htmlFor='strCategory'>Meal category</label>
      <select
        id='strCategory'
        {...register('strCategory', { required: true, })}
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
        {...register('strInstructions')}
        placeholder='Enter cooking instructions...'
      />

      <label htmlFor='strIngredientsAndMeasurements'>Ingredients and Measurements</label>
      <textarea
        id='strIngredientsAndMeasurements'
        {...register('strIngredientsAndMeasurements')}
        placeholder='e.g., Flour - 1dl, milk - 2dl, butter - 100g'
      />

      <button type='submit'>Submit</button>
    </form>
  );
};
