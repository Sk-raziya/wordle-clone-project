import React from "react";
import "./Grid.css";

const getFeedback = (guess, target) => {
  return guess.split("").map((char, index) => {
    if (char === target[index]) return "correct";
    if (target.includes(char)) return "present";
    return "absent";
  });
};

const Grid = ({ guesses, currentGuess, targetWord }) => {
  const rows = [...guesses, currentGuess, ...Array(6 - guesses.length - 1).fill("")];

  return (
    <div className="grid">
      {rows.map((guess, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: 5 }).map((_, colIndex) => {
            const char = guess[colIndex] || "";
            const feedback = guess ? getFeedback(guess, targetWord)[colIndex] : "";

            return (
              <div
                key={colIndex}
                className={`cell ${guess ? "flip" : ""} ${feedback}`}
                style={{ transitionDelay: `${colIndex * 200}ms` }}
              >
                {char}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
