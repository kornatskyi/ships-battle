import React from 'react'

export default function BattleField(props) {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const letters = ['a','b','c','d','e','f','g','h','i','j'];
    

    return (
        <div className="battle-field-container">
            <h4 className="field-name">{props.isMyField?"My field":"Enemy's field"}</h4>
            <div className="field-container">
                <div className="numbers">{numbers.map(number => <div key={number}>{number}</div>)}</div>
                <div className="letters">{letters.map(letter => <div key={letter}>{letter}</div>)}</div>
                <div className="field-grid">
                        {(()=> {
                            const arr = []
                            for (let i = 0; i < 100; i++) {
                                arr.push(<div key={i} className="cell"></div>)
                            }
                            return arr
                        })()}
                </div>
            </div>
        </div>
    )
}
