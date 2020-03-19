import React from 'react'
import IconBewertungNone from './images/Bewertung - nicht ausgefüllt.svg'
import IconBewertung75 from './images/Bewertung - 75.svg'
import IconBewertungFull from './images/Bewertung.svg'
import IconBewertung50 from './images/Bewertung - 50.svg'
import IconBewertung25 from './images/Bewertung - 25.svg'

export default function StarComponent(props) {
    if(props.stars > 3.5 && props.stars < 3.75) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertung50} alt={""}></img>
                <img src={IconBewertungNone} alt={""}></img>
            </div>
        )     
    } else if(props.stars > 3.75 && props.stars < 4) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertung75} alt={""}></img>
                <img src={IconBewertungNone} alt={""}></img>
            </div>
        )
    } else if(props.stars > 4 && props.stars < 4.25) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungNone} alt={""}></img>
            </div>
        )
    } else if(props.stars > 4.25 && props.stars < 4.5) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertungFull} alt={""}></img>
                <img src={IconBewertung25} alt={""}></img>
            </div>
        )
    } 
    return (
        <div class={"sternebewertung"}>
            <img src={IconBewertungNone} alt={""}></img>
            <img src={IconBewertungNone} alt={""}></img>
            <img src={IconBewertungNone} alt={""}></img>
            <img src={IconBewertungNone} alt={""}></img>
            <img src={IconBewertungNone} alt={""}></img>
        </div>
    )
}
