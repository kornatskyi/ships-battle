import React from "react";

export default function PlayerPanel(props) {


  const renderShipsOfLength = (length) => {
    return props.ships
      .filter((ship) => ship.props.length === length)
      .map((ship) => {
        return ship;
      });
  };
  return (
    <div className="player-panel-constainer">
      <div className="control">
        <button className="ready"> I'm ready </button>

        <div className="timer">Timer:</div>
      </div>
      <div className="ships">
        <div>{renderShipsOfLength(4)}</div>
        <div>{renderShipsOfLength(3)}</div>
        <div>{renderShipsOfLength(2)}</div>
        <div>{renderShipsOfLength(1)}</div>
      </div>
    </div>
  );
}
