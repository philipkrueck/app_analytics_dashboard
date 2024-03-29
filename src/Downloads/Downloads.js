import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import {getFullPeriodDateRange} from '../General/TimeSelection';
import SegmentedControl from '../General/SegmentedControl';
import * as DownloadsData from "./DownloadsData";
import moment from 'moment';
import DeltaComponent from '../General/DeltaComponent';
import { periodDifferenceType } from '../General/DateConversion';
import ChartSelection from '../General/ChartSelection';


function seriesGraph(isLineChart, data) {
    if (isLineChart) {
        return (<LineSeries data={data}></LineSeries>)
    }
    return (<VerticalBarSeries data={data}></VerticalBarSeries>)        
}

function DownlaodsPlot(props) {
    return (
        <XYPlot height={300} width={600} >
            <XAxis title={props.xAxisLabel} />
            <YAxis title={'Downloads'}/>
            {seriesGraph(props.isLineChart, props.data)}
        </XYPlot>
    );
}

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
        console.log(newDateRange);
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
                <TimeSelection 
                    selectedDateRange={selectedDateRange}
                    minimumDate={moment(downloadsData[0].date).toDate()}
                    onChange={(newDateRange) => handleSelectedDateRangeDidChange(newDateRange)}
                />
            <div class={"TimeChartSelection"}>
                
                <DownlaodsPlot
                    xAxisLabel={"Monat"}
                    isLineChart={isLineChartSelected}
                    data={data}
                />
            </div>
            <div class={"TimeChartSelection"}>
                <ChartSelection lineChartIsSelected={isLineChartSelected} onSelectionChange={(newValue) => chartSelectionIsLineChartSelected(newValue)}/>
            </div>
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

function SelectedPeriodLabel(props) {
    const startDate = moment(props.startDate).format("DD.MM.YYYY");
    const endDate = moment(props.endDate).format("DD.MM.YYYY");
    return (
        <div>
            <p> | {startDate + " bis " + endDate}</p>
        </div>
        
    );
}

function getData(selectedPeriod, selectedSpecificPeriod) {
    switch (selectedPeriod) {
        case "Woche":
            return DownloadsData.downloadsData(7);
        case "Monat":
            return DownloadsData.downloadsData(30);
        case "Jahr":
            return DownloadsData.downloadsData(365);
        case "Gesamt":
            return DownloadsData.downloadsData(690);
        default:
            break;
    }
}

function accumulateValues(data) {
    console.log(data);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        sum += data[i].y
    }
    return sum;
}

export default Downloads;