"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(outputs);

export default function App() {
  const [inputWord, setInputWord] = useState("");
  const [wordDesc, setWordDesc] = useState("");

  const searchWord = () => {
    setWordDesc("Searching...");
    setTimeout(() => {
      setWordDesc(`Definition of "${inputWord}" will appear here.`);
    }, 1000);
};


  return (
    <main>
      <h1>Cloud Dictionary</h1>
      <button onClick={searchWord}>Search</button>
      <p>{wordDesc}</p>
    </main>
  );
}
