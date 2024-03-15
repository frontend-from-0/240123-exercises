import React from "react";
import { useHistory } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";

const ParentComponent = () => {
  const history = useHistory();

  const handleClearSelection = () => {
    // Navigate back to the recipe list
    history.push("/");
  };

  return <RecipeDetail onClearSelection={handleClearSelection} />;
};

export default ParentComponent;
