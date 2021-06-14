import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTest, setShip, clearState } from "../redux/actions";

export default function PlayerPanel(props) {
  const test = useSelector((state) => state.field.grid);
  const dispatch = useDispatch();

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
        <button
          className="ready"
          onClick={() => {
            console.log(test);
            dispatch(setShip([23]))
          }}
        >
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
          }}
        ></div>
        <div
          tabIndex="0"
          className="ship3"
          onClick={(e) => {
            stickToTheCursor(e);

            props.shipType(3);
          }}
        ></div>
        <div
          tabIndex="0"
          className="ship2"
          onClick={(e) => {
            stickToTheCursor(e);

            props.shipType(2);
          }}
        ></div>
        <div
          tabIndex="0"
          className="ship1"
          onClick={(e) => {
            stickToTheCursor(e);

            props.shipType(1);
          }}
        ></div>
      </div>
    </div>
  );
}
