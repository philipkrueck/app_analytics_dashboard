import React, { useState } from 'react'
import IconLineChartBlue from '../General/images/Linienchart - blau.svg'
import IconBarChartBlue from '../General/images/Barchart - blau.svg'
import IconLineChartWhite from '../General/images/Linienchart - weiß.svg'
import IconBarChartWhite from '../General/images/Barchart - weiß.svg'


export default function ChartSelection(props) {
    const chartTypes = {
        lineChart: "line",
        barChart: "bar"
    };

    const selectedChartType = props.lineChartIsSelected ? chartTypes.lineChart : chartTypes.barChart;

    function handleSelectionDidChange(e) {
        props.onSelectionChange(e.target.value === chartTypes.lineChart);
    }

    if (selectedChartType === chartTypes.barChart) {
    return (
        <div>
            <div class={"ChartButton"}>
                <img src={IconLineChartWhite} alt={""} /> 
                <button class={"ChartButtonButton"} key={chartTypes.lineChart} onClick={handleSelectionDidChange} value={chartTypes.lineChart}>
                </button>
            </div>
            <div class={"ChartButton"}>
                <img src={IconBarChartBlue} alt={""} /> 
                <button class={"ChartButtonButton"} key={chartTypes.barChart} onClick={handleSelectionDidChange} value={chartTypes.barChart}>
                </button>
            </div>
        </div>
    ) } else {
    return (
        <div>
            <div class={"ChartButton"}>
                <img src={IconLineChartBlue} alt={""} /> 
                <button class={"ChartButtonButton"} key={chartTypes.lineChart} onClick={handleSelectionDidChange} value={chartTypes.lineChart}>
                </button>
            </div>
            <div class={"ChartButton"}>
                <img src={IconBarChartWhite} alt={""} /> 
                <button class={"ChartButtonButton"} key={chartTypes.barChart} onClick={handleSelectionDidChange} value={chartTypes.barChart}>
                </button>
            </div>
        </div>
    ) }
};
