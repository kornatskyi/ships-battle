import React, { useEffect, useState } from 'react'
import BattleField from './BattleField.jsx'
import PlayerPanel from './PlayerPanel.jsx'
import Ship from '../classes/Ship.js'

export default function PlayerGame(props) {

    const [ships, setShips] = useState([new Ship(4), new Ship(3),new Ship(3),new Ship(2),new Ship(2),new Ship(2),new Ship(1),new Ship(1),new Ship(1),new Ship(1),]);

    return (
        <div className="game-container">
            <h3>{props.name}</h3>

            <div className="fields">
                <BattleField isMyField={true} ships={ships} setShips={setShips} />
                <BattleField isMyField={false}/>
                <PlayerPanel ships={ships} setShips={setShips}/>

            </div>

        </div>
    )
}
