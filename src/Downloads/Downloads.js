import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, HorizontalBarSeries, VerticalBarSeries} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import SegmentedControl from '../General/SegmentedControl'


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

const timePeriodOptions = {

}

function Downloads() {

    const [chartConfiguration, setChartConfiguration] = useState({
        data: data2019,
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

    console.log(chartConfiguration.xAxisLabel);
    return (
        <div>
            <h1>Downloads</h1>
            <div>
                <TimeSelection  onChange={(selectedPeriod, selectedSpecificPeriod) => timeSelectionDidChange(selectedPeriod, selectedSpecificPeriod)}/>
            </div>
            <SegmentedControl controls={chartConfiguration.chartTypes} selectedControl={chartConfiguration.selectedChartType} onChange={(e) => segmentedControlDidChange(e)} />
            <DownlaodsPlot chartConfiguration={chartConfiguration} />
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

export default Downloads;