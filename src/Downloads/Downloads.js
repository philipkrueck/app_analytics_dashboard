import React, { useState } from 'react';
import TimeSelection from '../General/TimeSelection';
import {getFullPeriodDateRange} from '../General/TimeSelection';
import * as DownloadsData from "./DownloadsData";
import moment from 'moment';
import DeltaComponent from '../General/DeltaComponent';
import { periodDifferenceType } from '../General/DateConversion';
import ChartSelection from '../General/ChartSelection';
import BasicPlot from '../General/BasicPlot';
import {accumulateValues} from '../General/BasicPlot';
import SelectedPeriodLabel from '../General/SelectedPeriodLabel';


const lastDate = new Date();
const downloadsData = DownloadsData.downloadsData(2000, lastDate)

function Downloads() {

    const initialPeriod = getFullPeriodDateRange("month", lastDate)
    const [data, setData] = useState(DownloadsData.getGraphingData(downloadsData, initialPeriod[0], initialPeriod[1]));
    const [selectedDateRange, setSelectedDateRange] = useState(initialPeriod);
    const [isLineChartSelected, setIsLineChartSelected] = useState(true);


    function chartSelectionIsLineChartSelected(value) {
        setIsLineChartSelected(value);
    }

    function handleSelectedDateRangeDidChange(newDateRange) {
        setSelectedDateRange(newDateRange);
        setData(DownloadsData.getGraphingData(downloadsData, newDateRange[0], newDateRange[1]));
    }

    return (
        <div class={"DownloadPage"}>
            <h1>Downloads</h1>
            <div class={"DownloadPageSubtitle"}>
                <DownloadsDelta selectedDateRange={selectedDateRange} currentData={data}/>
                <SelectedPeriodLabel startDate={selectedDateRange[0]} endDate={selectedDateRange[1]}/>
            </div>
            <div>
            <TimeSelection 
                selectedDateRange={selectedDateRange}
                minimumDate={moment(downloadsData[0].date).toDate()}
                onChange={(newDateRange) => handleSelectedDateRangeDidChange(newDateRange)}
                
            />
            <ChartSelection lineChartIsSelected={isLineChartSelected} onSelectionChange={(newValue) => chartSelectionIsLineChartSelected(newValue)}/>
            </div>
            <div>
            <BasicPlot
                xAxisLabel={"Monat"}
                isLineChart={isLineChartSelected}
                title={"Downloads"}
                data={data}
            /></div>
        </div>
    )
}

function DownloadsDelta(props) {
    const differenceType = periodDifferenceType(props.selectedDateRange[0], props.selectedDateRange[1]);
    const previousDateRange = getFullPeriodDateRange(differenceType, moment(props.selectedDateRange[0]).subtract(1, 'd'));
    const previousData = DownloadsData.getGraphingData(downloadsData, previousDateRange[0], previousDateRange[1]);
    const previousPeriodDownloads = accumulateValues(previousData);
    const currentPeriodDownloads = accumulateValues(props.currentData);


    return (
        <div class={"DownloadsDeltaComponent"} id="delta-component">
            <p>{currentPeriodDownloads}</p>
            <DeltaComponent newValue={currentPeriodDownloads} oldValue={previousPeriodDownloads}/>
        </div>
    )
}

export default Downloads;