import React, { useState, useEffect } from "react";
import BattleField from "./BattleField.jsx";
import PlayerPanel from "./PlayerPanel.jsx";
import Ship from "./Ship.jsx";

export default function PlayerGame(props) {
  const [color, setColor] = useState("rgb(211, 211, 211)");

  const [shipMemory, setShipMemory] = useState({});
  const [trigers, setTrigers] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const putShipInTheMemory = (e) => {
    setShipMemory(ships[e.target.getAttribute("shipnumber")]);
    let trigersArr = []
    trigers.forEach((triger, i) => {

        if(i == e.target.getAttribute("shipnumber")) {
            trigersArr.push(!triger)
        } else {


            trigersArr.push(false)
        }
    })
    setTrigers(trigersArr)
    setColor("red");
  };

  console.log(trigers);
  console.log(shipMemory);
  const ships = [
    <Ship
      key={0}
      length={4}
      shipNumber={0}
      onClickFunc={putShipInTheMemory}
      triger={trigers[0]}
      color={color}
    />,
    <Ship
      key={1}
      length={3}
      shipNumber={1}
      onClickFunc={putShipInTheMemory}
      triger={trigers[1]}
      color={color}
    />,
    <Ship
      key={2}
      length={3}
      shipNumber={2}
      onClickFunc={putShipInTheMemory}
      triger={trigers[2]}
      color={color}
    />,
    <Ship
      key={3}
      length={2}
      shipNumber={3}
      onClickFunc={putShipInTheMemory}
      triger={trigers[3]}
      color={color}
    />,
    <Ship
      key={4}
      length={2}
      shipNumber={4}
      onClickFunc={putShipInTheMemory}
      triger={trigers[4]}
      color={color}
    />,
    <Ship
      key={5}
      length={2}
      shipNumber={5}
      onClickFunc={putShipInTheMemory}
      triger={trigers[5]}
      color={color}
    />,
    <Ship
      key={6}
      length={1}
      shipNumber={6}
      onClickFunc={putShipInTheMemory}
      triger={trigers[6]}
      color={color}
    />,
    <Ship
      key={7}
      length={1}
      shipNumber={7}
      onClickFunc={putShipInTheMemory}
      triger={trigers[7]}
      color={color}
    />,
    <Ship
      key={8}
      length={1}
      shipNumber={8}
      onClickFunc={putShipInTheMemory}
      triger={trigers[8]}
      color={color}
    />,
    <Ship
      key={9}
      length={1}
      shipNumber={9}
      onClickFunc={putShipInTheMemory}
      triger={trigers[9]}
      color={color}
    />,
  ];

  const [chosenShip, setChosenShip] = useState({});

  return (
    <div className="game-container">
      <h3>{props.name}</h3>
      <div className="fields">
        <BattleField isMyField={true} ships={ships} />
        <BattleField isMyField={false} />
        <PlayerPanel ships={ships} color={color} />
      </div>
    </div>
  );
}
