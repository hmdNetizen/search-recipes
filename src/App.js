import React, { Fragment, useState } from "react";
import "./MyCustomStyles.css";
import "./App.css";
import axios from "axios";
import NavBar from "./components/layouts/NavBar";
import Search from "./components/utility/Search";
import Recipes from "./components/Recipes/Recipes";
import Alert from "./components/utility/Alert";
import TopSection from "./components/layouts/TopSection";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const getRecipes = async (recipe) => {
    if (recipe.trim() === "") {
      showAlert("alert-danger", "Please type in something");
    } else {
      setLoading(true);
      const APP_ID = process.env.REACT_APP_API_ID;
      const APP_KEY = process.env.REACT_APP_API_KEY;

      const response = await axios.get(
        `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`
      );
      setRecipes(response.data.hits);
      setLoading(false);
    }
  };

  const handleClearRecipes = () => {
    setRecipes([]);
    setLoading(false);
  };
  const showAlert = (type, message) => {
    setAlert({ type, message });

    setTimeout(() => setAlert({}), 2000);
  };
  return (
    <Fragment>
      <NavBar />
      <div className="container-fluid">
        <TopSection />
        <Fragment>
          <Alert alert={alert} />
          <Search
            onSubmit={getRecipes}
            showClearBtn={recipes.length > 0 ? true : false}
            clearRecipes={handleClearRecipes}
          />
          <Recipes recipes={recipes} loading={loading} />
        </Fragment>
        <footer>
          <div>&copy;Copyright - Hamed Ayinde Jimoh</div>
        </footer>
      </div>
    </Fragment>
  );
};

export default App;
