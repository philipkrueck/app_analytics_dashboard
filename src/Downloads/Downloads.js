import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import SegmentedControl from '../General/SegmentedControl'
import * as DownloadsData from './DownloadData'
import { dataLastWeek } from './DownloadData';

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

function Downloads() {

    const [chartConfiguration, setChartConfiguration] = useState({
        data: DownloadsData.data2019,
        chartTypes: ["bar-chart", "line-chart"],
        selectedChartType: "line-chart", 
        xAxisLabel: "Monat"
    });

    function timeSelectionDidChange(selectedPeriod, selectedSpecificPeriod) {
        setChartConfiguration({
            data: getData(selectedPeriod, selectedSpecificPeriod),
            chartTypes: chartConfiguration.chartTypes,
            selectedChartType: chartConfiguration.selectedChartType, 
            xAxisLabel: selectedPeriod
        })
    }

    function segmentedControlDidChange(newType) {
        setChartConfiguration({
            data: chartConfiguration.data,
            chartTypes: chartConfiguration.chartTypes,
            selectedChartType: newType,
            xAxisLabel: "Monat"
        })
    }
    return (
        <div>
            <h1>Downloads</h1>
            <div>   
            <h4>{accumulateValues(chartConfiguration.data)}</h4>
            <h4>Delta Component</h4>
            <h4>Zeitraum</h4>
            </div>
            <TimeSelection />
            <SegmentedControl controls={chartConfiguration.chartTypes} selectedControl={chartConfiguration.selectedChartType} onChange={(e) => segmentedControlDidChange(e)} />
            <DownlaodsPlot chartConfiguration={chartConfiguration} />
        </div>
    )
}

function getData(selectedPeriod, selectedSpecificPeriod) {
    switch (selectedPeriod) {
        case "Woche":
            return DownloadsData.dataLastWeek;
        case "Monat":
            return DownloadsData.dataLastMonth;
        case "Jahr":
            return DownloadsData.data2020;
        case "Gesamt":
            return DownloadsData.data2019;
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