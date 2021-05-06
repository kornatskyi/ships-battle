import React, {useState, useEffect} from 'react'

export default function Ship(props) {


    const className=`ship${props.length}`;

    const [color, setColor] = useState(props.color)

    useEffect(
        
       () => {
        if(props.triger) {
            setColor(props.color)
        } else {
            setColor("green")
        }
        
       }, [props.triger])

    return (
        <div className={className} shipnumber={props.shipNumber} onClick={props.onClickFunc} style={{backgroundColor: color}}>
        </div>
    )
}
