import React from "react";
import Ingredients from "./Ingredients";

const RecipeItems = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h3>Recipes</h3>
      <img src={recipe.recipe.image} alt="alt" width={200} />
      <h2>{recipe.recipe.label}</h2>
      <p>
        Calories: <br />
        <span>{Math.round(recipe.recipe.calories)}</span>
      </p>
      <Ingredients ingredients={recipe.recipe.ingredients} />
      <a href={recipe.recipe.url}>Recipe Details</a>
    </div>
  );
};

export default RecipeItems;
