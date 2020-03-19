import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

export const daysBetween = (dateOne, dateTwo) => {
    return Math.floor(moment.duration(dateTwo.diff(dateOne)).asDays());
}

export const fullMonthDifference = (startDate, endDate) => {
    const [startMoment, endMoment] = [moment(startDate), moment(endDate)];
    const [startMonth, endMonth] = [startMoment.month() + 1, endMoment.month() + 1]; // month() returns integer between 0 and 11, that's why 1 is added
    const [startYear, endYear] = [startMoment.year(), endMoment.year()];

    return 12*(endYear - startYear) + endMonth - startMonth + 1;
};

export const fullYearDifference = (startDate, endDate) => {
    const [startYear, endYear] = [moment(startDate).year(), moment(endDate).year()];
    return endYear - startYear + 1;
}

export const periodDifferenceType = (startDate, endDate) => {
    const daysBetweenDates = daysBetween(moment(startDate), moment(endDate)); 
    if (daysBetweenDates <= 27) {
        return "week";
    } else if (daysBetweenDates < 365) {
        return "month";
    }
    return "year";
}