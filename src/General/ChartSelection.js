import React from 'react'

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
            <label key={chartTypes.lineChart}>
                <input 
                    type="radio" 
                    value={chartTypes.lineChart} 
                    id={chartTypes.lineChart}
                    checked={chartTypes.lineChart === selectedChartType}
                    onChange={handleSelectionDidChange}
                />
                {chartTypes.lineChart}
            </label>)
            <label key={chartTypes.barChart}>
                <input 
                    type="radio" 
                    value={chartTypes.barChart} 
                    id={chartTypes.barChart}
                    checked={chartTypes.barChart === selectedChartType}
                    onChange={handleSelectionDidChange}
                />
                {chartTypes.barChart}
            </label>)
        </div>
    )
};
