import React, { useState, useEffect } from "react";
import MyBattleField from "./MyBattleField.jsx";
import EnemiesBattleField from "./EnemiesBattleField.jsx";
import PlayerPanel from "./PlayerPanel.jsx";
import Ship from "./Ship.jsx";

export default function PlayerGame(props) {
  const [color, setColor] = useState("rgb(211, 211, 211)");



  const [chosenShip, setChosenShip] = useState({});

  const [shipTypeRegister, setShipTypeRegister] = useState(0)

  function getShipType(val) {
    setShipTypeRegister(val)
    console.log(shipTypeRegister);
  }
  return (
    <div className="game-container">
      <h3>{props.name}</h3>
      <div className="fields">
        <MyBattleField isMyField={true}  shipType={shipTypeRegister} />
        <EnemiesBattleField />
        <PlayerPanel  color={color} shipType={getShipType}/>
      </div>
    </div>
  );
}
