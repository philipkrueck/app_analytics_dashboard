import React from 'react'
import IconDeltaPos from './images/Delta_positiv.svg'
import IconDeltaNeg from './images/Delta_negativ.svg'
import IconDeltaNeutral from './images/neutral.svg'

export default function DeltaComponent(props) {
    if(props.percentageValue === 0) {
        return (
            <div class={"DeltaComponent"}>
                <p><img src={IconDeltaNeutral}></img></p>
                <p>{props.percentageValue}</p>
            </div>
        )     
    } else if(props.percentageValue < 0) {
        return (
            <div class={"DeltaComponent"}>
                <p><img src={IconDeltaNeg}></img></p>
                <p>{props.percentageValue}</p>
            </div>
        )
    }
    return (
        <div class={"DeltaComponent"}>
            <p><img src={IconDeltaPos}></img></p>
            <p>{props.percentageValue}</p>
        </div>
    )
}
