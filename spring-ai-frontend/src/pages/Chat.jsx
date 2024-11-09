import React, { useState } from "react";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ask-ai?prompt=${prompt}`
      );

      const data = await response.json;
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error("Error occured" + error);
    }
  };

  return (
    <div>
      <h1>Talk to AI</h1>

      <input
        type="text"
        name=""
        id=""
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask to AI"
      />

      <button type="submit" onClick={() => handleAskAI}>
        Ask AI
      </button>

      <div className="output">
        <h2>Response from AI</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
