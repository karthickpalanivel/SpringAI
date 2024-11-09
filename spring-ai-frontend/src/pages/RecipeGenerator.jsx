import React, { useState } from "react";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [diet, setDiet] = useState("");
  const [servings, setServings] = useState("");

  const handleRecipeGenerator = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/recipe-creator?ingredients=${ingredients}&dietaryRestrictions=${diet}&cuisine=${cuisine}`
      );

      const recipeData = await response.json;
      console.log(recipeData);
      setServings(recipeData);
    } catch (error) {
      console.error("Error occured" + error);
    }
  };

  return (
    <div>
      <h2>Create a Recipe</h2>

      <input
        type="text"
        name=""
        id=""
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
      />

      <input
        type="text"
        name=""
        id=""
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Cuisine (e.g. Italian, Mexican, etc.)"
      />

      <input
        type="text"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
      />

      <button type="submit" onClick={handleRecipeGenerator}>
        Create Recipe
      </button>

      <div className="output">
        <pre className="recipe-text">{servings}</pre>
      </div>
    </div>
  );
};

export default RecipeGenerator;
