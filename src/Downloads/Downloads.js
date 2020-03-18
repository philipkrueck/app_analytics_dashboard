import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import SegmentedControl from '../General/SegmentedControl'
import * as DownloadsData from "./DownloadsData";
import * as DateConversion from '../General/DateConversion'

function seriesGraph(configuration) {
    switch (configuration.selectedChartType) {
        case "bar-chart":
            return (<VerticalBarSeries data={configuration.data}></VerticalBarSeries>)
        case "line-chart":
            return (<LineSeries data={configuration.data}></LineSeries>)
    }
}

function DownlaodsPlot(props) {
    return (
        <XYPlot height={300} width={600} >
            <XAxis title={props.chartConfiguration.xAxisLabel} />
            <YAxis title={'Downloads'}/>
            <HorizontalGridLines />
            <VerticalGridLines />
            {seriesGraph(props.chartConfiguration)}
        </XYPlot>
    );
}

const periodOptions = ["week", "month", "year"];
const calendarPeriodOptions = ["week", "month", "year", "decade"];

function Downloads() {

    const [chartConfiguration, setChartConfiguration] = useState({
        data: DownloadsData.sampleDataSet,
        chartTypes: ["bar-chart", "line-chart"],
        selectedChartType: "line-chart", 
        xAxisLabel: "Monat"
    });

    function segmentedControlDidChange(newType) {
        setChartConfiguration({
            data: chartConfiguration.data,
            chartTypes: chartConfiguration.chartTypes,
            selectedChartType: newType,
            xAxisLabel: "Monat"
        })
    }

    const [selectedTimePeriodIndex, setSelctedTimePeriodIndex] = useState(1);
    const [selectedDateRange, setSelectedDateRange] = useState(DateConversion.getFullPeriodDateRange(periodOptions[selectedTimePeriodIndex], periodOptions, new Date()));

    function handleTimeSelectionDidChange() {
        console.log("Time Selection did change")
    }

    return (
        <div>
            <h1>Downloads</h1>
            <div>   
            <h4>{accumulateValues(chartConfiguration.data)}</h4>
            <h4>Delta Component</h4>
            <h4>Zeitraum</h4>
            </div>
            <TimeSelection 
                periodOptions={periodOptions}
                calendarPeriodOptions={calendarPeriodOptions} 
                selectedPeriodIndex={selectedTimePeriodIndex}
                onChange={() => handleTimeSelectionDidChange()}
            />
            <SegmentedControl controls={chartConfiguration.chartTypes} selectedControl={chartConfiguration.selectedChartType} onChange={(e) => segmentedControlDidChange(e)} />
            <DownlaodsPlot chartConfiguration={chartConfiguration} />
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