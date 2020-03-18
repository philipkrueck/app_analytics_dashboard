import Moment from 'moment';
import * as DateConversion from '../General/DateConversion';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

export const downloadsData = (days, finalDate = new Date()) => {
    const data = []; 

    for (var i = 0; i < days; i++) {
        const date = moment(finalDate).subtract(days - i, 'days').format("YYYY-MM-DD");
        const randomDownloads = Math.floor(Math.random() * 100) + 10; 
        data.push({date: date, downloads: randomDownloads});
    }
    return data;
};

const scalingOptions = {
    days: "days",
    months: "months", 
    years: "years"
}

export const xAxisScalingForDurationInDays = (days) => {
    if (days >= 1000) {
        return scalingOptions.years;
    } else if (days >= 100) {
        return scalingOptions.months
    }
    return scalingOptions.days
}

export const filteredDataWithRelevantDates = (data, dateOne, dateTwo) => {
    const validDateRange = moment.range(moment(dateOne), moment(dateTwo));
    const filteredData = data.filter((dataPoint) => {
        return (validDateRange.contains(moment(dataPoint.date)));
    });
    return filteredData;
}

export const getGraphingData = (data, dateOne, dateTwo) => {
    const momentDateOne = new moment(dateOne);
    const momentDateTwo = new moment(dateTwo);
    if (momentDateTwo.isBefore(momentDateOne)) {
        return null; // invalid dates (should probably throw an error or something)
    }

    const daysBetweenDates = DateConversion.daysBetween(momentDateOne, momentDateTwo);
    const scaling = xAxisScalingForDurationInDays(daysBetweenDates);
    const filteredData = filteredDataWithRelevantDates(data, momentDateOne, momentDateTwo);

    if (scaling == scalingOptions.days) {
        return formatGraphingDataWithDaysScaling(filteredData);
    } else if (scaling == scalingOptions.months) {
        return formatGraphingDataWithMonthsScaling(filteredData);
    } else if (scaling == scalingOptions.years) {
        return formatGraphingDataWithYearsScaling(filteredData);  
    }
    return null;
}
    
export const formatGraphingDataWithDaysScaling = (relevantData) => {
    const graphingData = relevantData.map((dataPoint, ind) => {
        return {
            x: ind,
            y: dataPoint.downloads
        };
    });
    return graphingData;
}

export const formatGraphingDataWithMonthsScaling = (relevantData) => {
    const size = DateConversion.fullMonthDifference(relevantData[0].date, relevantData[relevantData.length-1].date);
    const monthlyDownloads = new Array(size);
    monthlyDownloads.fill(0);
    let currentIndex = 0; 
    let currentMonth = moment(relevantData[0].date).month()
    let previousMonth = currentMonth;
    
    relevantData.forEach((dataPoint) => {
        currentMonth = moment(dataPoint.date).month();
        if (currentMonth != previousMonth) { 
            currentIndex += 1;
        }
        monthlyDownloads[currentIndex] += dataPoint.downloads;
        previousMonth = currentMonth;
    });

    return monthlyDownloads.map((downloads, idx) => {
        return { x: idx, y: downloads }
    });
}

export const formatGraphingDataWithYearsScaling = (relevantData) => {
    const size = DateConversion.fullYearDifference(relevantData[0].date, relevantData[relevantData.length-1].date);
    const yearlyDownloads = new Array(size);
    yearlyDownloads.fill(0);
    let currentIndex = 0; 
    let currentYear = moment(relevantData[0].date).month();
    let previousYear = moment(relevantData[1].date).year();

    relevantData.forEach((dataPoint) => {
        currentYear = moment(dataPoint.date).year();
        if (currentYear != previousYear) {
            currentIndex += 1;
        }
        yearlyDownloads[currentIndex] += dataPoint.downloads;
        previousYear = currentYear;
    });
    
    return yearlyDownloads.map((downloads, idx) => {
        return { x: idx, y: downloads }
    });
};





// ToDo: delete
export const sampleDataSet = [
    { x: 0, y: 38 },
    { x: 1, y: 73 },
    { x: 2, y: 52 },
    { x: 3, y: 49 },
    { x: 4, y: 76 },
    { x: 5, y: 44 },
    { x: 6, y: 73 }
  ];