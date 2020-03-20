import React, { useState } from 'react';
import DeltaComponent from '../General/DeltaComponent';
import SelectedPeriodLabel from '../General/SelectedPeriodLabel';
import { periodDifferenceType } from '../General/DateConversion';
import moment from 'moment';
import TimeSelection from '../General/TimeSelection';
import {getFullPeriodDateRange} from '../General/TimeSelection';
import BasicPlot, {accumulateValues} from '../General/BasicPlot';
import ChartSelection from '../General/ChartSelection';


function ActiveUserBubbles() {
    return (
        <div>
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
    );
}

function ActiveUsersDelta(props) { 
    const differenceType = periodDifferenceType(props.selectedDateRange[0], props.selectedDateRange[1]);
    const previousDateRange = getFullPeriodDateRange(differenceType, moment(props.selectedDateRange[0]).subtract(1, 'd'));
    const previousData = dummyData // DownloadsData.getGraphingData(downloadsData, previousDateRange[0], previousDateRange[1]);
    const previousPeriodDownloads = accumulateValues(previousData);
    const currentPeriodDownloads = accumulateValues(props.currentData);


    return (
        <div class={"DownloadsDeltaComponent"} id="delta-component">
            <p>{currentPeriodDownloads}</p>
            <DeltaComponent newValue={currentPeriodDownloads} oldValue={previousPeriodDownloads}/>
        </div>
    )
}

const dummyData = [
    {x: 0, y: 5},
    {x: 1, y: 5},
    {x: 2, y: 5},
    {x: 3, y: 5},
    {x: 4, y: 5},
    {x: 5, y: 5},
]

function ActiveUsers() {
    const selectedDateRange = [new Date(2017, 1, 1), new Date(2018, 1, 1)];
    const [isLineChartSelected, setIsLineChartSelected] = useState(true);
    const data = dummyData;

    function chartSelectionIsLineChartSelected(value) {
        setIsLineChartSelected(value);
    }

    function handleSelectedDateRangeDidChange(newDateRange) {
        console.log(newDateRange);
    }

    return (
        <div>
            <h1>Aktive Nutzer</h1>
            <div>
                <ActiveUsersDelta selectedDateRange={selectedDateRange} currentData={dummyData}/>
                <SelectedPeriodLabel startDate={selectedDateRange[0]} endDate={selectedDateRange[0]}/>
            </div>
            <TimeSelection 
                selectedDateRange={selectedDateRange}
                minimumDate={moment(selectedDateRange[0]).toDate()}
                onChange={(newDateRange) => handleSelectedDateRangeDidChange(newDateRange)}
            />
            <ChartSelection lineChartIsSelected={isLineChartSelected} onSelectionChange={(newValue) => chartSelectionIsLineChartSelected(newValue)}/>
            <ActiveUserBubbles />
            <BasicPlot
                xAxisLabel={"Monat"}
                isLineChart={isLineChartSelected}
                title={"Aktive Nutzer"}
                data={data}
            />
        </div>
    )
}

export default ActiveUsers;
