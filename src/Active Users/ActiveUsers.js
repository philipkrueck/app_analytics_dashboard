import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import DeltaComponent from '../General/DeltaComponent';


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
        <XYPlot height={500} width={700} >
            <XAxis />
            <YAxis />
            <LineSeries data={props.data}></LineSeries>
        </XYPlot>
    );
}

function ActiveUsers() {
    const [dataToShow, setDataToShow] = useState(dataLastMonth);

    function timeSelectionDidChange(selectedPeriod, selectedSpecificPeriod) {
        setDataToShow(getData(selectedPeriod, selectedSpecificPeriod));
    }

    return (
        <div>
            <h1>Aktive Nutzer</h1>
            <div>
                <TimeSelection onChange={(selectedPeriod, selectedSpecificPeriod) => timeSelectionDidChange(selectedPeriod, selectedSpecificPeriod)}/>
            </div>
            <div>
                <div className={"ActiveUsersGraph"}><DownlaodsPlot data={dataToShow} /></div>
                <div className={"ActiveUsers"}>
                    <div className={"ActiveUsersBubble"}>
                        <p>Daily Active User (DAU)</p>
                    </div>
                    <div className={"ActiveUsersDeltaComponent"}>
                        <p>763 DAU</p>
                        <DeltaComponent oldValue={730} newValue={763} />
                    </div>
                </div>
                <div className={"ActiveUsers"}>
                    <div className={"ActiveUsersBubble"}>
                        <p>Weekly Active User (WAU)</p>
                    </div>
                    <div className={"ActiveUsersDeltaComponent"}>
                        <p>93276 WAU</p>
                        <DeltaComponent oldValue={98300} newValue={93276} />
                    </div>
                </div>
                <div className={"ActiveUsers"}>
                    <div className={"ActiveUsersBubble"}>
                        <p>Monthly Active User (MAU)</p>
                    </div>
                    <div className={"ActiveUsersDeltaComponent"}>
                        <p>7321641 MAU</p>
                        <DeltaComponent newValue={7321641} oldValue={7621641}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getData(selectedPeriod, selectedSpecificPeriod) {
    switch (selectedPeriod) {
        case "Woche":
            return dataLastWeek;
        case "Monat":
            return dataLastMonth;
        case "Jahr":
            return data2020;
        case "Gesamt":
            return data2019;
        default:
            break;
    }
}

export default ActiveUsers;
