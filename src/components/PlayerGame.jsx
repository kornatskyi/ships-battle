import React, { useState, useEffect } from "react";
import MyBattleField from "./MyBattleField.jsx";
import EnemiesBattleField from "./EnemiesBattleField.jsx";
import PlayerPanel from "./PlayerPanel.jsx";

export default function PlayerGame(props) {
  const [color, setColor] = useState("rgb(211, 211, 211)");

  return (
    <div className="game-container">
      <h3>{props.name}</h3>
      <div className="fields">
        <MyBattleField />
        <EnemiesBattleField />
        <PlayerPanel color={color} />
      </div>
    </div>
  );
}
