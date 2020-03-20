import Moment from 'moment';
import * as DateConversion from '../General/DateConversion';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

export const activeUsersData = (days, finalDate = new Date()) => {
    const data = []; 

    for (var i = 0; i < days; i++) {
        const date = moment(finalDate).subtract(days - i, 'days').format("YYYY-MM-DD");
        const randomUserNumber = Math.floor(Math.random() * 500) + 10; 
        data.push({date: date, activeUsers: randomUserNumber});
    }
    return data;
};

export const getGraphingData = (data, dateOne, dateTwo) => {
    const momentDateOne = new moment(dateOne);
    const moemntDateTwo = new moment(dateTwo);
    if (moemntDateTwo.isBefore(momentDateOne)) {
        return null;
    }

    const daysBetweenDates = DateConversion.daysBetween(momentDateOne, momentDateTwo);
    const filteredData = filteredDataWithRelevantDates(data, momentDateOne, momentDateTwo);

    return null;
};
