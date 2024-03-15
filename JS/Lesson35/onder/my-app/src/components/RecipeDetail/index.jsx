import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";
import "./styles.css";

const RecipeDetail = ({ onClearSelection }) => {
  const { id } = useParams();
  const { recipesnew, setRecipesnew } = useContext(GlobalContext);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.meals && data.meals.length > 0) {
          setRecipesnew(data.meals[0]);
        } else {
          console.error("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id, setRecipesnew]);

  // If recipesnew is not available, return null
  if (!recipesnew) {
    return null;
  }

  return (
    <div className="recipe-details-container">
      <h2 className="heading">Recipe Details</h2>
      <div className="image-content">
        <img
          className="recipe-thumbnail"
          src={recipesnew.strMealThumb}
          alt={recipesnew.strMeal}
        />
      </div>
      <div className="text-content">
        <p>{recipesnew.strMeal}</p>
        <p>{recipesnew.strInstructions}</p>
        <Link to={"/"}>
          {" "}
          <button>Go Back to Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
