import React, { useState, useEffect } from "react";
import BattleField from "./BattleField.jsx";
import PlayerPanel from "./PlayerPanel.jsx";
import Ship from "./Ship.jsx";

export default function PlayerGame(props) {
  const [color, setColor] = useState("rgb(211, 211, 211)");

  const [shipsRegister, setShipsRegister] = useState({});

  function clickOnShip() {}

  const ships = [
    <Ship key={0} length={4} shipNumber={0} color={color} />,
    <Ship key={1} length={3} shipNumber={1} color={color} />,
    <Ship key={2} length={3} shipNumber={2} color={color} />,
    <Ship key={3} length={2} shipNumber={3} color={color} />,
    <Ship key={4} length={2} shipNumber={4} color={color} />,
    <Ship key={5} length={2} shipNumber={5} color={color} />,
    <Ship key={6} length={1} shipNumber={6} color={color} />,
    <Ship key={7} length={1} shipNumber={7} color={color} />,
    <Ship key={8} length={1} shipNumber={8} color={color} />,
    <Ship key={9} length={1} shipNumber={9} color={color} />,
  ];

  useEffect(() => {
    console.log(Array.from(document.querySelectorAll(".ship")));
    Array.from(document.querySelectorAll(".ship")).map((ship) => {
      ship.addEventListener("click", (e) => {
        console.log(ships.filter(ship => ship.props.shipNumber == e.target.getAttribute('shipnumber')));
        setShipsRegister(ships.filter(ship => ship.props.shipNumber == e.target.getAttribute('shipnumber'))[0])
      });
    });
  }, []);
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
        <BattleField isMyField={true} ships={ships} shipType={shipTypeRegister} />
        <BattleField isMyField={false} />
        <PlayerPanel ships={ships} color={color} shipType={getShipType}/>
      </div>
    </div>
  );
}
