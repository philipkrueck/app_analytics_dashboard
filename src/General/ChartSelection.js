import React, { useState } from 'react'
import IconLineChart from '../General/images/Linienchart - blau.svg'
import IconBarChart from '../General/images/Barchart - blau.svg'


export default function ChartSelection(props) {
    const chartTypes = {
        lineChart: "line",
        barChart: "bar"
    };

    const selectedChartType = props.lineChartIsSelected ? chartTypes.lineChart : chartTypes.barChart;

    function handleSelectionDidChange(e) {
        props.onSelectionChange(e.target.value === chartTypes.lineChart);
    }

    return (
        <div>
            <div class={"ChartButton"}>
                <img src={IconBarChart} alt={""} /> 
                <button class={"ChartButtonButton"} key={chartTypes.barChart} onClick={handleSelectionDidChange} value={chartTypes.barChart}>
                bar</button>
            </div>
            <div class={"ChartButton"}>
                <img src={IconLineChart} alt={""} /> 
                <button class={"ChartButtonButton"} key={chartTypes.lineChart} onClick={handleSelectionDidChange} value={chartTypes.lineChart}>
                bar</button>
            </div>
        </div>
    )
};
