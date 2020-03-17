import React from 'react'
import IconBewertungNone from './images/Bewertung - nicht ausgefüllt.svg'
import IconBewertung75 from './images/Bewertung - 75.svg'
import IconBewertungFull from './images/Bewertung.svg'
import IconBewertung50 from './images/Bewertung - 50.svg'
import IconBewertung25 from './images/Bewertung - 25.svg'

export default function StarComponent(props) {
    if(props.percentageStars > 3.5 && props.percentageStars < 3.75) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertung50}/>
                <img src={IconBewertungNone}/>
            </div>
        )     
    } else if(props.percentageStars > 3.75 && props.percentageStars < 4) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertung75}/>
                <img src={IconBewertungNone}/>
            </div>
        )
    } else if(props.percentageStars > 4 && props.percentageStars < 4.25) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungNone}/>
            </div>
        )
    } else if(props.percentageStars > 4.25 && props.percentageStars < 4.5) {
        return (
            <div class={"sternebewertung"}>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertungFull}/>
                <img src={IconBewertung25}/>
            </div>
        )
    } 
    return (
        <div class={"sternebewertung"}>
            <img src={IconBewertungNone}/>
            <img src={IconBewertungNone}/>
            <img src={IconBewertungNone}/>
            <img src={IconBewertungNone}/>
            <img src={IconBewertungNone}/>
        </div>
    )
}
