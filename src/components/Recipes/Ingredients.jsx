import React from "react";

const Ingredients = (props) => {
  return (
    <div
      style={{
        border: "1px solid rgba(235, 242, 249, .3)",
        padding: 10,
        margin: "10px 10px 20px",
      }}
    >
      <h4 className="text-light">Ingredients</h4>
      <ul style={ingredientStyles}>
        {props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ padding: 10 }}>
            {ingredient.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ingredientStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: 10,
  textAlign: "left",
  color: "#f4f4f4",
};

export default Ingredients;
