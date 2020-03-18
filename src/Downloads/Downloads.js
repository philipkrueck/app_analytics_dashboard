import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import {getFullPeriodDateRange} from '../General/TimeSelection';
import SegmentedControl from '../General/SegmentedControl';
import * as DownloadsData from "./DownloadsData";
import moment from 'moment';


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
            <HorizontalGridLines />
            <VerticalGridLines />
            {seriesGraph(props.isLineChart, props.data)}
        </XYPlot>
    );
}

const lastDate = new Date();
const downloadsData = DownloadsData.downloadsData(2000, lastDate)

function Downloads() {

    const chartTypes = ["bar-chart", "line-chart"];

    const initialPeriod = getFullPeriodDateRange("month", lastDate)
    const [data, setData] = useState(DownloadsData.getGraphingData(downloadsData, initialPeriod[0], initialPeriod[1]));
    const [selectedDateRange, setSelectedDateRange] = useState(initialPeriod);
    const [chartType, setChartType] = useState(chartTypes[0]);


    function segmentedControlDidChange(newType) {
        setChartType(newType);
    }

    function handleSelectedDateRangeDidChange(newDateRange) {
        console.log(newDateRange);
        setSelectedDateRange(newDateRange);
        setData(DownloadsData.getGraphingData(downloadsData, newDateRange[0], newDateRange[1]));
    }

    return (
        <div>
            <h1>Downloads</h1>
            <div>   
            <h4>{accumulateValues(data)}</h4>
            <h4>Delta Component</h4>
            <h4>{selectedDateRange[0] + ' bis ' + selectedDateRange[1]}</h4>
            </div>
            <TimeSelection 
                selectedDateRange={selectedDateRange}
                minimumDate={moment(downloadsData[0].date).toDate()}
                onChange={(newDateRange) => handleSelectedDateRangeDidChange(newDateRange)}
            />
            <SegmentedControl controls={chartTypes} selectedControl={chartType} onChange={(e) => segmentedControlDidChange(e)} />
            <DownlaodsPlot
                xAxisLabel={"Monat"}
                isLineChart={chartType == chartTypes[1]}
                data={data}
            />
        </div>
    )
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