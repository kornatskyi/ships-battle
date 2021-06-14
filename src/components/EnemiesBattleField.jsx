import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Ship from "./Ship.jsx";

import { useSelector, useDispatch } from "react-redux";

export default function EnemiesBattleField(props) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  // const gridValues = useSelector((state) => state.enemiesField.grid);
  const dispatch = useDispatch();

  const cellColor = (i) => {
    // if (gridValues[i]) return { backgroundColor: "red" };
    return { backgroundColor: "blue" };
  };

  const fillGrid = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(
        <div
          key={i}
          id={numbers[Math.floor(i / 10)] + letters[i % 10]}
          value={i}
          data-cell-number={i}
          style={cellColor(i)}
          onClick={(e) => {
          }}
          className="cell"
        ></div>
      );
    }
    return arr;
  };

  return (
    <div className="battle-field-container">
      <h4 className="field-name">
        Enemy's field
      </h4>
      <div className="field-container">
        <div className="numbers">
          {numbers.map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
        <div className="letters">
          {letters.map((letter) => (
            <div key={letter}>{letter}</div>
          ))}
        </div>
        <div className="field-grid">
          {fillGrid()}
          {/* {shipsOnTheField} */}
        </div>
      </div>
    </div>
  );
}
