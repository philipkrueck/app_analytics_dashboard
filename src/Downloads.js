import React, { useState } from 'react';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines} from 'react-vis';


// MARK: constants
const data2020 = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0},
    {x: 10, y: 0},
    {x: 11, y: 0}
  ];

const data2019 = [
    {x: 0, y: 3},
    {x: 1, y: 2},
    {x: 2, y: 9},
    {x: 3, y: 10},
    {x: 4, y: 15},
    {x: 5, y: 9},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0},
    {x: 10, y: 3},
    {x: 11, y: 1}
];

const dataLastWeek = [
    {x: 0, y: 3},
    {x: 1, y: 2},
    {x: 2, y: 9},
    {x: 3, y: 10},
    {x: 4, y: 15},
    {x: 5, y: 9},
    {x: 6, y: 6}
]

const dataLastMonth = [
    {x: 0, y: 3},
    {x: 1, y: 2},
    {x: 2, y: 9},
    {x: 3, y: 10},
    {x: 4, y: 15},
    {x: 5, y: 9},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 9},
    {x: 10, y: 10},
    {x: 11, y: 15},
    {x: 12, y: 9},
    {x: 13, y: 3},
    {x: 14, y: 2},
    {x: 15, y: 9},
    {x: 16, y: 10},
    {x: 17, y: 15},
    {x: 18, y: 9},
    {x: 19, y: 3},
    {x: 20, y: 2},
    {x: 21, y: 9},
    {x: 22, y: 10},
    {x: 23, y: 15},
    {x: 24, y: 9},
    {x: 25, y: 6},
    {x: 26, y: 3},
    {x: 27, y: 2},
    {x: 28, y: 9}
]






function DownlaodsPlot(props) {
    return (
        <XYPlot height={300} width={600} >
            <XAxis />
            <YAxis />
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineSeries data={props.data}></LineSeries>
        </XYPlot>
    );
}

function TimeSelection(props) {
    function handleSelectTimeDurationDidChange(e) {
        props.onChange(e.target.value);
    }

    return ( 
        <div>
            <h2>{props.currentTimeDuration}</h2>
            <select onChange={handleSelectTimeDurationDidChange} defaultValue={props.currentTimeDuration}>
                { props.timeDurationOptions.map((timeDuration) => {
                    return (<option key={timeDuration}>{timeDuration}</option>)
                })}
            </select>
        </div>
    );
}

function Downloads() {
    const timeDurationOptions = ["Woche", "Monat", "Jahr", "Gesamt"];
    const [currentTimeDuration, setCurrentTimeDuration] = useState(timeDurationOptions[3]);

    function timeSelectionDidChange(newValue) {
        setCurrentTimeDuration(newValue)
    }

    return (
        <div>
            <h1>Downloads</h1>
            <TimeSelection currentTimeDuration={currentTimeDuration} timeDurationOptions={timeDurationOptions} onChange={(newValue) => timeSelectionDidChange(newValue)}/>
            <DownlaodsPlot data={getData(currentTimeDuration, timeDurationOptions)} />
        </div>
    )
}

function getData(timeDuration, timeDurationOptions) {
    switch (timeDuration) {
        case timeDurationOptions[0]:
            return dataLastWeek;
        case timeDurationOptions[1]:
            return dataLastMonth;
        case timeDurationOptions[2]:
            return data2020;
        case timeDurationOptions[3]:
            return data2019;
        default:
            break;
    }
}

export default Downloads;