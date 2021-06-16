import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrementShips, putShipIntoTheBuffer } from "../redux/actions";

export default function PlayerPanel(props) {
  const dispatch = useDispatch();
  const shipsBuffer = useSelector((state) => state.shipsBuffer);

  useEffect(() => {
    console.log(document.activeElement);
  }, [document.activeElement]);

  function stickToTheCursor(e) {
    const clone = e.target.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.pointerEvents = "none";

    document.addEventListener("mousemove", function (ev) {
      // console.log((ev.clientY));
      document.querySelector(".ships").appendChild(clone);

      clone.style.top = ev.clientY - 12 + "px";
      clone.style.left = ev.clientX - 12 + "px";
    });
  }

  return (
    <div className="player-panel-constainer">
      <div className="control">
        <button className="ready" onClick={() => {}}>
          I'm ready
        </button>

        <div className="timer">Timer:</div>
      </div>
      <div className="ships">
        <div
          tabIndex="0"
          className="ship4"
          onClick={(e) => {
            stickToTheCursor(e);
            props.shipType(4);
            dispatch(putShipIntoTheBuffer({ length: 4 }));
            dispatch(decrementShips({ type: "x4" }));
          }}
        >
          {shipsBuffer.x4}
        </div>
        <div
          tabIndex="0"
          className="ship3"
          onClick={(e) => {
            stickToTheCursor(e);
            props.shipType(3);
            
            dispatch(putShipIntoTheBuffer({ length: 3 }));
            dispatch(decrementShips({ type: "x3" }));
          }}
        >
          {shipsBuffer.x3}
        </div>
        <div
          tabIndex="0"
          className="ship2"
          onClick={(e) => {
            stickToTheCursor(e);
            dispatch(putShipIntoTheBuffer({ length: 2 }));
            dispatch(decrementShips({ type: "x2" }));

            props.shipType(2);
          }}
        >
          {shipsBuffer.x2}
        </div>
        <div
          tabIndex="0"
          className="ship1"
          onClick={(e) => {
            stickToTheCursor(e);
            dispatch(putShipIntoTheBuffer({ length: 1 }));
            dispatch(decrementShips({ type: "x1" }));
            props.shipType(1);
          }}
        >
          {shipsBuffer.x1}
        </div>
      </div>
    </div>
  );
}
