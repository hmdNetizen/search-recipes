import React, { useState } from "react";

const Search = ({ onSubmit, showClearBtn, clearRecipes }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="mx-2">
      <div className="form-group">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="form-control bg-light"
          placeholder="Search..."
        />
        <button className="btn btn-block btn-warning mt-2">Search</button>
        {showClearBtn && (
          <button
            onClick={clearRecipes}
            className="btn btn-block btn-light mb-4 mt-1"
          >
            Clear Recipes
          </button>
        )}
      </div>
    </form>
  );
};

// const styleClear = {
//   background: "#e8e8ea",
// };

export default Search;
