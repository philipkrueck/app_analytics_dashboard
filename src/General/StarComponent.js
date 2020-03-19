import React from 'react'
import IconBewertungNone from './images/Bewertung - nicht ausgefüllt.svg'
import IconBewertung75 from './images/Bewertung - 75.svg'
import IconBewertungFull from './images/Bewertung.svg'
import IconBewertung50 from './images/Bewertung - 50.svg'
import IconBewertung25 from './images/Bewertung - 25.svg'

export default function StarComponent(props) {
    // convert stars to array 
    // e.g. 3.5 => [Full, Full, Full, Icon50, IconNone]
    let imageNames = [];
    for (let i = 1; i <= 5; i++) {
        if (props.stars >= i) {
            imageNames.push(IconBewertungFull)
        } else if (props.stars < i && props.stars > i-1) {
            const decimal = props.stars - i + 1
            if (decimal < 0.33) {
                imageNames.push(IconBewertung25);
            } else if (decimal < 0.66) {
                imageNames.push(IconBewertung50);
            } else {
                imageNames.push(IconBewertung75);
            }
        } else {
            imageNames.push(IconBewertungNone)
        }
    }


    return (
        <div className={"sternebewertung"}>
                <img src={imageNames[0]} alt={""}></img>
                <img src={imageNames[1]} alt={""}></img>
                <img src={imageNames[2]} alt={""}></img>
                <img src={imageNames[3]} alt={""}></img>
                <img src={imageNames[4]} alt={""}></img>
            </div>
    )
}
