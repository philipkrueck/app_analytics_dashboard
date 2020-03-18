import React from 'react'
import IconDeltaPos from './images/Delta_positiv.svg'
import IconDeltaNeg from './images/Delta_negativ.svg'
import IconDeltaNeutral from './images/neutral.svg'

export default function DeltaComponent(props) {
    if(props.percentageValue === 0) {
        return (
            <div>
                <p><img src={IconDeltaNeutral} alt={""}></img></p>
                <p>{props.percentageValue}</p>
            </div>
        )     
    } else if(props.percentageValue < 0) {
        return (
            <div>
                <p><img src={IconDeltaNeg} alt={""}></img></p>
                <p>{props.percentageValue}</p>
            </div>
        )
    }
    return (
        <div>
            <p><img src={IconDeltaPos} alt={""}></img></p>
            <p>{props.percentageValue}</p>
        </div>
    )
}
