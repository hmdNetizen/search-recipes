import React from "react";
import RecipeItems from "./RecipeItems";
import "./Recipes.css";
import Spinner from "../utility/Spinner";

const Recipes = ({ recipes, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <RecipeItems recipe={recipe} key={recipe.recipe.uri} />
        ))}
      </div>
    );
  }
};

export default Recipes;
