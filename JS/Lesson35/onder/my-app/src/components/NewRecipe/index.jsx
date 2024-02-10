import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RecipeContext } from './RecipeContext'; 
import './styles.css';

const NewRecipe = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addRecipe } = useContext(RecipeContext); 

  const onSubmit = (data) => {
    const ingredientsAndMeasurements = data.strIngredientsAndMeasurements.split(',').map(item => item.trim());
    
    const newRecipe = {
      strMeal: data.strMeal,
      strDrinkAlternate: data.strDrinkAlternate,
      strCategory: data.strCategory,
      strCategoryOther: data.strCategoryOther,
      strInstructions: data.strInstructions,
      ingredientsAndMeasurements: ingredientsAndMeasurements,
    };

    addRecipe(newRecipe); 
  };

  return (
    <form className='new-recipe-form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor='strMeal'>Meal name</label>
      <input id='strMeal' type='text' {...register('strMeal', { required: true })} placeholder='Please enter meal type...' />
      {errors.strMeal && <span className='input-error'>Meal name is required</span>}

      <label htmlFor='strDrinkAlternate'>Drink alternate</label>
      <input id='strDrinkAlternate' type='text' {...register('strDrinkAlternate')} />

      <label htmlFor='strCategory'>Meal category</label>
      <select id='strCategory' {...register('strCategory', { required: true })}>
        <option value=''>Select category</option>
        <option value='Side'>Side</option>
        <option value='Main'>Main</option>
        <option value='Dessert'>Dessert</option>
        <option value='Other'>Other</option>
      </select>
      {errors.strCategory && <span className='input-error'>Category is required</span>}
      
      <label htmlFor='strInstructions'>Instructions</label>
      <textarea id='strInstructions' {...register('strInstructions')} placeholder='Enter cooking instructions...' />

      <label htmlFor='strIngredientsAndMeasurements'>Ingredients and Measurements</label>
      <textarea id='strIngredientsAndMeasurements' {...register('strIngredientsAndMeasurements')} placeholder='e.g., Flour - 1dl, milk - 2dl, butter - 100g' />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default NewRecipe;
