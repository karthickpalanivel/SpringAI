import React, { useState } from "react";
import "../App.css";
const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImageUrls, setGeneratedImageUrls] = useState([]);

  const handleGenerateImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/generate-image?prompt=${prompt}`
      );

      const urls = await response.json;
      console.log(urls);
      setGeneratedImageUrls(urls);
    } catch (error) {
      console.error("Error occured" + error);
    }
  };
  return (
    <div className="tab-content">
      {/* Header of the component */}

      <h1>Generate an Image</h1>

      <input
        type="text"
        name=""
        value={prompt}
        placeholder="Enter Prompt to generate Image"
        id=""
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={() => handleGenerateImage} type="submit">
        Generate Image
      </button>

      <div className="image-grid">
        {generatedImageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Generated ${index}`} />
        ))}

        {[...Array(4 - generatedImageUrls.length)].map((_, index) => (
          <div
            key={index + generatedImageUrls.length}
            className="empty-image-slot"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
