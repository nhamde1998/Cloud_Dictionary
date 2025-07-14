"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import dotenv from "dotenv";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(outputs);

export default function App() {
  const [inputWord, setInputWord] = useState("");
  const [wordDesc, setWordDesc] = useState("");

  const url = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

  const searchWord = async () => {
  if (!inputWord.trim()) {
    setWordDesc("Please enter a word.");
    return;
  }

  setWordDesc("Searching...");

  try {
    const response = await fetch(`${url}?word=${inputWord}`);
    const data = await response.json();

    if (response.ok) {
      setWordDesc(data.description || "No description found.");
    } else {
      setWordDesc(data || "Error: Word not found.");
    }
  } catch (error) {
    setWordDesc("Failed to fetch definition. Try again.");
    console.error("Fetch error:", error);
  }
};

  return (  
    <main>
      <input
      type="text"
      value={inputWord}
      onChange={(e) => setInputWord(e.target.value)}
      placeholder="Enter a word"
      className="your-input-class"
      />
      <h1>Cloud Dictionary</h1>
      <button onClick={searchWord}>Search</button>
      <p>{wordDesc}</p>
    </main>
  );
}
