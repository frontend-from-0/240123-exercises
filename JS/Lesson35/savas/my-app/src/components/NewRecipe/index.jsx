import { useForm } from "react-hook-form";
import "./styles.css";

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

  const strCategory = watch("strCategory");

  const onSubmit = (data) => {
    const ingredientsInput = data.strIngredient;
    const ingredientsArray = ingredientsInput
      .split(",")
      .map((item) => item.trim());

    for (let i = 0; i < 20; i++) {
      if (i < ingredientsArray.length) {
        data[`strIngredient${i + 1}`] = ingredientsArray[i];
      } else {
        data[`strIngredient${i + 1}`] = "";
      }
    }

    const measuresInput = data.strMeasure;
    const measuresArray = measuresInput.split(",").map((item) => item.trim());

    for (let i = 0; i < 20; i++) {
      if (i < measuresArray.length) {
        data[`strMeasure${i + 1}`] = measuresArray[i];
      } else {
        data[`strMeasure${i + 1}`] = "";
      }
    }
    const { strIngredient, strMeasure, ...cleanData } = data;
    console.log(cleanData);
  };

  return (
    <form
      className="new-recipe-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <label htmlFor="strMeal">Meal name</label>
      <input
        required
        id="strMeal"
        type="text"
        {...register("strMeal", { required: true })}
        placeholder="Please enter meal type..."
      />
      {errors.strMeal && (
        <span className="input-error">*Meal name is required</span>
      )}

      <label htmlFor="strDrinkAlternate">Drink alternate</label>
      <input
        id="strDrinkAlternate"
        type="text"
        {...register("strDrinkAlternate")}
        placeholder="Please enter dring alternate..."
      />

      <label htmlFor="strCategory"> Meal category</label>
      <select
        id="strCategory"
        {...register("strCategory", { required: true, minLength: 1 })}
      >
        <option value="">Select category</option>
        <option value="Side">Side</option>
        <option value="Main">Main</option>
        <option value="Dessert">Dessert</option>
        <option value="Other">Other</option>
      </select>
      {errors.strCategory && (
        <span className="input-error">*Category is required</span>
      )}
      {strCategory === "Other" && (
        <input
          type="text"
          {...register("strCategoryOther", { required: true, minLength: 3 })}
          placeholder="Please enter category..."
        />
      )}

      <label htmlFor="strArea">Country Origin</label>
      <input
        required
        id="strArea"
        type="text"
        {...register("strArea", { required: true })}
        placeholder="Please enter origin country..."
      />
      {errors.strArea && (
        <span className="input-error">*Country name is required</span>
      )}

      <label htmlFor="strInstructions">Instructions</label>
      <input
        id="strInstructions"
        type="text"
        {...register("strInstructions")}
        placeholder="Please enter instructions..."
      />

      <label htmlFor="strTags">Provide a tag</label>
      <input
        id="strTags"
        type="text"
        {...register("strTags")}
        placeholder="Please provide a tag..."
      />

      <label htmlFor="strYoutube">Provide a link for the recipe</label>
      <input
        id="strYoutube"
        type="url"
        {...register("strYoutube")}
        placeholder="Please provide a link..."
      />

      <label htmlFor="strIngredients">Ingredients (separate with commas)</label>
      <input
        required
        id="strIngredients"
        type="text"
        {...register("strIngredient", { required: true })}
        placeholder="Enter ingredients separated by commas..."
      />
      {errors.strIngredient && (
        <span className="input-error">*Ingredient/s is/are required</span>
      )}

      <label htmlFor="strMeasures">Measures (separate with commas)</label>
      <input
        required
        id="strMeasures"
        type="text"
        {...register("strMeasure", { required: true })}
        placeholder="Enter measures separated by commas..."
      />
      {errors.strMeasure && (
        <span className="input-error">*Measure/s is/are required</span>
      )}

      <label htmlFor="strSource">Provide a link for the recipe source</label>
      <input
        id="strSource"
        type="url"
        {...register("strSource")}
        placeholder="Please provide a link for source..."
      />

      <button type="Submit">Submit</button>
    </form>
  );
};
