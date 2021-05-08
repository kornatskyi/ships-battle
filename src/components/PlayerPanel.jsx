import React from "react";

export default function PlayerPanel(props) {



  return (
    <div className="player-panel-constainer">
      <div className="control">
        <button className="ready"> I'm ready </button>

        <div className="timer">Timer:</div>
      </div>
      <div className="ships">
              <div><div className="ship4" onClick={() => {
                props.shipType(4)
              }}></div></div>
              <div><div className="ship3" onClick={() => {
                props.shipType(3)
              }}></div></div>
              <div><div className="ship2" onClick={() => {
                props.shipType(2)
              }}></div></div>
              <div><div className="ship1" onClick={() => {
                props.shipType(1)
              }}></div></div>
      </div>
    </div>
  );
}
