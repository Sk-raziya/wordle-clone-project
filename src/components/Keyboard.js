import React from "react";
import "./Keyboard.css";

const KEYS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

const Keyboard = ({ onKeyPress }) => {
  return (
    <div className="keyboard">
      {KEYS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split("").map((key) => (
            <button key={key} onClick={() => onKeyPress(key)} className="key">
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button className="key action-key" onClick={() => onKeyPress("ENTER")}>
          ENTER
        </button>
        <button className="key action-key" onClick={() => onKeyPress("BACKSPACE")}>
          ⌫
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
