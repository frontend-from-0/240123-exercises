import { Link } from "react-router-dom";
import "./styles.css";

export const RecipeList = ({ recipes }) => {
  return (
    <div className="results">
      <h2 className="results-heading">Search Results</h2>
      <ul className="results-list">
        {recipes.map((recipe) => {
          return (
            <li className="results-item" key={recipe.idMeal}>
              <Link
                className="results-item-link"
                to={`recipes/${recipe.idMeal}`}
              >
                {recipe.strMeal}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
