import moment from 'moment';

export const downloadData = (days) => {
    console.log('calling data');
    const data = []; 

    for (var i = 0; i < days; i++) {
        const date = moment(new Date).subtract(days - i, 'days').format("YYYY-MM-DD");
        const randomDownloads = Math.floor(Math.random() * 100) + 10; 
        data.push({date: date, downloads: randomDownloads});
    }
    return data;
};