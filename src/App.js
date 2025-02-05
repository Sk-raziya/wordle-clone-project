

import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import Message from "./components/Message";
import "./App.css";

const WORDS = ["APPLE", "TABLE", "CHAIR", "HOUSE", "PLANT"];
const TARGET_WORD = WORDS[Math.floor(Math.random() * WORDS.length)];

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing"); // playing, won, lost
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const handleGuess = () => {
    if (currentGuess.length !== 5) {
      setMessage("Enter a 5-letter word!");
      return;
    }
    if (!WORDS.includes(currentGuess)) {
      setMessage("Invalid word!");
      return;
    }

    const updatedGuesses = [...guesses, currentGuess];
    setGuesses(updatedGuesses);
    setCurrentGuess("");
    setMessage("");

    if (currentGuess === TARGET_WORD) {
      setGameStatus("won");
      setMessage("🎉 Congratulations! You guessed it!");
    } else if (updatedGuesses.length === 6) {
      setGameStatus("lost");
      setMessage(`😢 Game Over! The word was ${TARGET_WORD}`);
    }
  };

  const handleKeyPress = (key) => {
    if (gameStatus !== "playing") return;

    if (key === "ENTER") {
      handleGuess();
    } else if (key === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const resetGame = () => window.location.reload();

  return (
    <div className="app">
      <div className="header">
        <h1>Wordle Clone</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <Grid guesses={guesses} currentGuess={currentGuess} targetWord={TARGET_WORD} />
      <Keyboard onKeyPress={handleKeyPress} />
      <Message message={message} />

      <button className="new-game-btn" onClick={resetGame}>
        🔄 New Game
      </button>
    </div>
  );
};

export default App;

