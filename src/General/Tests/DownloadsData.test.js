import * as DownloadsData from '../../Downloads/DownloadsData';
import * as DateConversion from '../DateConversion';
import moment from "moment";

test('generateDownloadsData', () => {
  const data = DownloadsData.downloadsData(100);
  expect(data.length).toBe(100);
});

test('getXAxisScalingForDurationInDays', () => {
  expect(DownloadsData.xAxisScalingForDurationInDays(7)).toBe('days');
  expect(DownloadsData.xAxisScalingForDurationInDays(31)).toBe('days');
  expect(DownloadsData.xAxisScalingForDurationInDays(200)).toBe('months');
  expect(DownloadsData.xAxisScalingForDurationInDays(1001)).toBe('years');
});

test('filterRelevantData', () => {
  const data = DownloadsData.downloadsData(100);
  const end = moment(data[99].date);
  const endMinus7Days = moment(data[99-6].date);
  const endMinus30Days = moment(data[99-29].date)

  const filteredLast7Days = DownloadsData.filteredDataWithRelevantDates(data, endMinus7Days, end);
  const filteredLast30Days = DownloadsData.filteredDataWithRelevantDates(data, endMinus30Days, end);
  expect(filteredLast7Days.length).toBe(7);
  expect(filteredLast30Days.length).toBe(30);
});

test('getGraphingData', () => {
  const data = DownloadsData.downloadsData(1001, new Date(2020, 2, 17)); // 2020-03-17
  const lastIndex = data.length-1;
  const end = moment(data[lastIndex].date);
  const endMinus7Days = moment(data[lastIndex-6].date);
  const endMinus120Days = moment(data[lastIndex-119].date);
  const endMinus1001Days = moment(data[lastIndex-1000].date);
  DownloadsData.getGraphingData(data, endMinus7Days, end);

  const graphingData7Days = DownloadsData.getGraphingData(data, endMinus7Days, end);
  expect(graphingData7Days.length).toBe(7);

  const monthsDifference = DateConversion.fullMonthDifference(endMinus120Days, end);
  const graphingDataMonths = DownloadsData.getGraphingData(data, endMinus120Days, end);
  expect(graphingDataMonths.length).toBe(monthsDifference);

  const yearsBetweenStartAndEnd = DateConversion.fullYearDifference(endMinus1001Days, end);
  const grapingDataYears = DownloadsData.getGraphingData(data, endMinus1001Days, end);
  expect(grapingDataYears.length).toBe(yearsBetweenStartAndEnd);
});

test('formatGraphingDataWithDaysScaling', () => {
  const data = DownloadsData.downloadsData(7);
  const graphingDataDays = DownloadsData.formatGraphingDataWithDaysScaling(data);

  expect(graphingDataDays.length).toBe(7);
  for (let i = 0; i <= 6; i++) {
    expect(graphingDataDays[i].y).toBe(data[i].downloads);
  }
});

test('formatGraphingDataWithMonthsScaling', () => {
  const data = DownloadsData.downloadsData(121, new Date(2020, 2, 17)); // 2020-03-17
  const end = moment(data[120].date);
  const start = moment(data[0].date);

  const monthsBetweenStartAndEnd = DateConversion.fullMonthDifference(start, end);

  const graphingDataMonths = DownloadsData.formatGraphingDataWithMonthsScaling(data);
  expect(graphingDataMonths.length).toBe(monthsBetweenStartAndEnd);

  let [sum0, sum1, sum2, sum3, sum4, sum5] = new Array(5).fill(0);

  data.forEach((dataPoint) => {
    switch (moment(dataPoint.date).month()) {
      case 10: 
        sum0 += dataPoint.downloads;
        break;
      case 11: 
        sum1 += dataPoint.downloads;
        break;
      case 0: 
        sum2 += dataPoint.downloads;
        break;
      case 1: 
        sum3 += dataPoint.downloads;
        break;
      case 2: 
        sum4 += dataPoint.downloads;
        break;
    }
  });

  expect(graphingDataMonths[0].y).toBe(sum0);
  expect(graphingDataMonths[1].y).toBe(sum1);
  expect(graphingDataMonths[2].y).toBe(sum2);
  expect(graphingDataMonths[3].y).toBe(sum3);
  expect(graphingDataMonths[4].y).toBe(sum4);
});

test('formatGraphingDataWithYearsScaling', () => {
  const data = DownloadsData.downloadsData(700, new Date(2020, 2, 17)); // 2020-03-17

  const yearsBetweenStartAndEnd = DateConversion.fullYearDifference(data[0].date, data[699].date);

  const graphingDataYears = DownloadsData.formatGraphingDataWithYearsScaling(data);
  expect(graphingDataYears.length).toBe(yearsBetweenStartAndEnd);

  let [sum0, sum1, sum2] = new Array(3).fill(0);

  data.forEach((dataPoint) => {
    switch (moment(dataPoint.date).year()) {
      case 2018: 
        sum0 += dataPoint.downloads;
        break;
      case 2019: 
        sum1 += dataPoint.downloads;
        break;
      case 2020: 
        sum2 += dataPoint.downloads;
        break;
    }
  });

  expect(graphingDataYears[0].y).toBe(sum0);
  expect(graphingDataYears[1].y).toBe(sum1);
  expect(graphingDataYears[2].y).toBe(sum2);
});