import React from 'react'
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalBarSeries} from 'react-vis';

function seriesGraph(isLineChart, data) {
    if (isLineChart) {
        return (<LineSeries data={data}></LineSeries>)
    }
    return (<VerticalBarSeries data={data}></VerticalBarSeries>)        
}

export default function BasicPlot(props) {
    return (
        <XYPlot height={300} width={600} >
            <XAxis title={props.xAxisLabel} />
            <YAxis title={'Aktive Nutzer'}/>
            {seriesGraph(props.isLineChart, props.data)}
        </XYPlot>
    );
}
