import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalBarSeries} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import DeltaComponent from '../General/DeltaComponent';
import IconRanking from '../General/images/Ranking.svg'
import ChartSelection from '../General/ChartSelection';
import * as DownloadsData from "../Downloads/DownloadsData";
import {getFullPeriodDateRange} from '../General/TimeSelection';
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
            {seriesGraph(props.isLineChart, props.data)}
        </XYPlot>
    );
}

const lastDate = new Date();
const downloadsData = DownloadsData.downloadsData(2000, lastDate)

function Ranking() {
    const initialPeriod = getFullPeriodDateRange("month", lastDate)
    const [isLineChartSelected, setIsLineChartSelected] = useState(true);
    const [data, setData] = useState(DownloadsData.getGraphingData(downloadsData, initialPeriod[0], initialPeriod[1]));
    const [selectedDateRange, setSelectedDateRange] = useState(initialPeriod);


    function chartSelectionIsLineChartSelected(value) {
        setIsLineChartSelected(value);
    }

    function handleSelectedDateRangeDidChange(newDateRange) {
        console.log(newDateRange);
        setSelectedDateRange(newDateRange);
        setData(DownloadsData.getGraphingData(downloadsData, newDateRange[0], newDateRange[1]));
    }

    return (
        <div class={"AktiveNutzerPage"}>
            <h1>Aktive Nutzer</h1>
            <div>
                <TimeSelection 
                    selectedDateRange={selectedDateRange}
                    minimumDate={moment(downloadsData[0].date).toDate()}
                    onChange={(newDateRange) => handleSelectedDateRangeDidChange(newDateRange)}
                />    
            </div>
            <div>
                <div className={"ActiveUsersGraph"}>
                <DownlaodsPlot
                    xAxisLabel={"Monat"}
                    isLineChart={isLineChartSelected}
                    data={data}
                />
                </div>
                <div class={"TimeChartSelection"}>
                    <ChartSelection lineChartIsSelected={isLineChartSelected} onSelectionChange={(newValue) => chartSelectionIsLineChartSelected(newValue)}/>
                </div>
                <div className={"ActiveUsers"}>
                    <div class={"IconRanking"}>
                        <img src={IconRanking} alt={""}></img>
                        <div class={"RankingInImage1"}>16</div>
                        <div class={"RankingInImage2"}><DeltaComponent percentageValue={1} /></div>
                    </div>
                    <div class={"ActiveUsersDeltaComponent"}>
                        <p>Sekundärkategorie</p>
                    </div>
                </div>
                <div className={"ActiveUsers"}>
                    <div class={"IconRanking"}>
                        <img src={IconRanking} alt={""}></img> 
                        <div class={"RankingInImage1"}>45</div>
                        <div class={"RankingInImage2"}><DeltaComponent percentageValue={-1} /></div>
                    </div>
                    <div class={"ActiveUsersDeltaComponent"}>
                        <p>Sekundärkategorie</p>
                    </div>
                </div>
                <div className={"ActiveUsers"}>
                    <div class={"IconRanking"}>
                        <img src={IconRanking} alt={""}></img> 
                        <div class={"RankingInImage1"}>29</div>
                        <div class={"RankingInImage2"}><DeltaComponent percentageValue={3} /></div>
                    </div>
                    <div class={"ActiveUsersDeltaComponent"}>
                        <p>Sekundärkategorie</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ranking;
