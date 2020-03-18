import React from 'react'
import IconDeltaPos from './images/Delta_positiv.svg'
import IconDeltaNeg from './images/Delta_negativ.svg'
import IconDeltaNeutral from './images/neutral.svg'

export default function DeltaComponent(props) {
    const percentageValue = Math.round(((props.newValue / props.oldValue - 1) + Number.EPSILON) * 10000) / 10000;
    const absoluteValue = Math.abs(percentageValue)*100 + "%";

    if (percentageValue >= 0) {
        return (
            <div>
                <p><img src={IconDeltaPos} alt={""}></img></p>
                <p>{absoluteValue}</p>
            </div>
        )
    }
    return (
        <div>
            <p><img src={IconDeltaNeg} alt={""}></img></p>
            <p>{absoluteValue}</p>
        </div>
    )
}
