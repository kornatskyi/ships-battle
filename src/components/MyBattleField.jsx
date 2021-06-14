import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Ship from "./Ship.jsx";

import { useSelector, useDispatch } from "react-redux";
import { placeMyShip } from "../redux/actions";

const [VERTICAL, HORISONTAL] = ["VERTICAL", "HORISONTAL"];

const getArrayOfCoordinates = (coordinate, length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(coordinate + i * 10);
    return arr;
  }
};

export default function MyBattleField(props) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  const gridValues = useSelector((state) => state.myField.grid);
  const bufferShip = useSelector((state) => state.ship);
  const dispatch = useDispatch();

  const cellColor = (i) => {
    if (gridValues[i]) return { backgroundColor: "red" };
    return { backgroundColor: "blue" };
  };

  const placeShip = (coordinate, direction, length) => {
    if (direction === VERTICAL) {
      if ((coordinate % 10) + length > 9) {
        console.log("Can't set it here");
      } else {
        return [...getArrayOfCoordinates(coordinate, length)];
      }
    } else {
      console.log('horisontal');
    }
  };

  const fillGrid = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(
        <div
          key={i}
          id={numbers[Math.floor(i / 10)] + letters[i % 10]}
          value={i}
          data-cell-number={i}
          style={cellColor(i)}
          onClick={(e) => {
            console.log(e.target.attributes["data-cell-number"].value);
            console.log(gridValues);
            dispatch(placeMyShip([i]));
          }}
          className="cell"
        ></div>
      );
    }
    return arr;
  };

  return (
    <div className="battle-field-container">
      <h4 className="field-name">
        {props.isMyField ? "My field" : "Enemy's field"}
      </h4>
      <div className="field-container">
        <div className="numbers">
          {numbers.map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
        <div className="letters">
          {letters.map((letter) => (
            <div key={letter}>{letter}</div>
          ))}
        </div>
        <div className="field-grid">
          {fillGrid()}
          {/* {shipsOnTheField} */}
        </div>
      </div>
    </div>
  );
}

// export default function MyBattleField(props) {
//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

//   const [shipsOnTheField, setShipsOnTheField] = useState([]);

//   function onCellClick(e) {
//     if (props.shipType !== 0) {
//       setShipsOnTheField(
//       [...shipsOnTheField,   <Ship key={shipsOnTheField.length}
//         top={parseInt(e.target.id[0])}
//         left={letters.indexOf(e.target.id[1])}
//         length={props.shipType}
//         isHorizontalOriintation={true}
//       />]
//       );
//     } else {
//       console.log("choose a ship to set up");
//     }
//   }

//   const fillGrid = () => {
//     const arr = [];
//     for (let i = 0; i < 100; i++) {
//       arr.push(
//         <div
//           key={i}
//           id={numbers[Math.floor(i / 10)] + letters[i % 10]}
//           className="cell"
//           onClick={onCellClick}
//         ></div>
//       );
//     }
//     return arr;
//   };

//   return (
//     <div className="battle-field-container">
//       <h4 className="field-name">
//         {props.isMyField ? "My field" : "Enemy's field"}
//       </h4>
//       <div className="field-container">
//         <div className="numbers">
//           {numbers.map((number) => (
//             <div key={number}>{number}</div>
//           ))}
//         </div>
//         <div className="letters">
//           {letters.map((letter) => (
//             <div key={letter}>{letter}</div>
//           ))}
//         </div>
//         <div className="field-grid">
//           {fillGrid()}
//           {shipsOnTheField}
//         </div>
//       </div>
//     </div>
//   );
// }
