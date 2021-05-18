import React, { useState, useEffect } from "react";
import BattleField from "./BattleField.jsx";
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
        <BattleField isMyField={true}  shipType={shipTypeRegister} />
        <BattleField isMyField={false} />
        <PlayerPanel  color={color} shipType={getShipType}/>
      </div>
    </div>
  );
}
