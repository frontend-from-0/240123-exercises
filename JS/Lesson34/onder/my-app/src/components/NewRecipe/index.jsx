import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const NewRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState(recipeData);

  const strCategory = watch('strCategory');

  Object.keys(formData).forEach((key) => {
    setValue(key, formData[key]);
  });

  const onSubmit = (data) => {
    Object.keys(data).forEach((key) => {
      setFormData((prevData) => ({
        ...prevData,
        [key]: data[key],
      }));
    });

    console.log(data);
  };

  const inputFields = [
    'strMeal',
    'strDrinkAlternate',
    'strCategory',
    'strMealThumb',
    'strTags',
    'strYoutube',
    'strSource',
    'strImageSource',
    'strCreativeCommonsConfirmed',
  ]

};

  return (
    <form className='new-recipe-form' onSubmit={handleSubmit(onSubmit)} noValidate>
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

      <label htmlFor='strMealThumb'>Meal Thumbnail URL</label>
      <input
        id='strMealThumb'
        type='text'
        {...register('strMealThumb')}
        placeholder='https://www.themealdb.com\/images\/media\/meals\/58oia61564916529.jpg'
      />

      <label htmlFor='strTags'>Tags</label>
      <input
        id='strTags'
        type='text'
        {...register('strTags')}
        placeholder='Soup'
      />

      <label htmlFor='strYoutube'>YouTube Link</label>
      <input
        id='strYoutube'
        type='text'
        {...register('strYoutube')}
        placeholder='https://www.youtube.com\/watch?v=VVnZd8A84z4'
      />

      <label htmlFor='strSource'>Recipe Source</label>
      <input
        id='strSource'
        type='text'
        {...register('strSource')}
        placeholder='https://findingtimeforcooking.com\/main-dishes\/red-lentil-soup-corba/"'
      />

      <label htmlFor='strImageSource'>Image Source</label>
      <input
        id='strImageSource'
        type='text'
        {...register('strImageSource')}
        placeholder='null'
      />

      <label htmlFor='strCreativeCommonsConfirmed'>Creative Commons Confirmation</label>
      <input
        id='strCreativeCommonsConfirmed'
        type='text'
        {...register('strCreativeCommonsConfirmed')}
        placeholder='Enter Creative Commons confirmation...'
      />

      <button type='submit'>Submit</button>
    </form>
  );
