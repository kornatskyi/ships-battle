import React from "react";

export default function PlayerPanel(props) {




  const renderShip = (length) => {
   return props.ships
      .filter((ship) => ship.length === length)
      .map((ship, i) => {
        return (
          <div
            key={i}
            className={"ship" + ship.length}
            style={{ backgroundColor: ship.color }}
          ></div>
        );
      });
  };
  return (
    <div className="player-panel-constainer">
      <div className="control">
        <button className="ready"> I'm ready </button>

        <div className="timer">Timer:</div>
      </div>
      <div className="ships">
        <div>{renderShip(4)}</div>
        <div>
        {renderShip(3)}
        </div>
        <div>
        {renderShip(2)}
        </div>
        <div>
        {renderShip(1)}
        </div>
      </div>
    </div>
  );
}
