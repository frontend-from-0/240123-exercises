// RecipeList.jsx

import React, { useContext, useEffect } from "react";
import {
  List,
  ListItem,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";
import "./styles.css";

const RecipeList = () => {
  const { recipesnew, setRecipesnew } = useContext(GlobalContext);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        );
        const data = await response.json();
        if (data.meals) {
          setRecipesnew(data.meals);
        } else {
          setRecipesnew([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    handleSubmit();
  }, [setRecipesnew]);

  return (
    <div className="recipe-list">
      <Typography></Typography>
      <List className="container">
        {Array.isArray(recipesnew) &&
          recipesnew.map((recipe) => (
            <ListItem key={recipe.idMeal}>
              <Card className="recipe-card">
                <CardMedia
                  component="img"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="recipe-image"
                />
                <CardContent className="recipe-details">
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="recipe-title"
                  >
                    {recipe.strMeal}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="recipe-category"
                  >
                    {recipe.strCategory}
                  </Typography>
                  <Link to={`/recipe/${recipe.idMeal}`} className="recipe-link">
                    View Details
                  </Link>
                </CardContent>
              </Card>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default RecipeList;
