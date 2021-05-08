import React, {useState, useEffect} from 'react'

export default function Ship(props) {

    const shipStyle = {
        top: (props.top * 10) + "%",
        left: (props.left * 10) + "%",
        transform: props.isHorizontalOriintation? "rotate(0deg)":  `rotate(90deg) translateY(calc(${props.length - 1} * 50%)) translateX(calc(100% / ${props.length === 4?2.65:props.length === 3? 3:props.length === 2?4:0}))`
    }
// [{rotate: "90deg"}] , {translateY:"(2 * 50%)"}, {translateX: "(100% / 3)"}
    const className=`ship${props.length} ship`;

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
        <div className={className}  style={shipStyle}>
            {/* {(() => {
                let arr = []
                for (let i = 0; i < props.length; i++) {
                    
                    arr.push(<div className={`sector sector-${i}`} key={i} style={{width:"100%", height:"100%" }}></div>)
                    
                }
                return arr;
            })()} */}
        </div>
    )
}
