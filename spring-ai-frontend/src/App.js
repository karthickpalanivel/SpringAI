import "./App.css";
import React, { useState } from "react";
import ImageGenerator from "./pages/ImageGenerator";
import RecipeGenerator from "./pages/RecipeGenerator";
import Chat from "./pages/Chat";

function App() {
  const [active, setActive] = useState("iamge-generator");

  const handleTabChange = (tab) => {
    console.log(tab);
    setActive(tab);
  };

  return (
    <div className="App">
      <button
        className={active === "Image-generator" ? "active" : ""}
        onClick={() => handleTabChange("Image-generator")}
      >
        Image generator
      </button>
      <button
        className={active === "chat" ? "active" : ""}
        onClick={() => handleTabChange("chat")}
      >
        Ask AI
      </button>
      <button
        className={active === "recipe-generator" ? "active" : ""}
        onClick={() => handleTabChange("recipe-generator")}
      >
        Recipe Generator
      </button>

      <div>
        {active === "Image-generator" && (
          <div>
            <ImageGenerator />
          </div>
        )}
        {active === "chat" && (
          <div>
            <Chat />
          </div>
        )}
        {active === "recipe-generator" && (
          <div>
            <RecipeGenerator />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
