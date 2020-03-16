import React, {useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import Selection from './Selection'

const periodOptions = ["week", "month", "year"];
const calendarPeriodOptions = ["week", "month", "year", "decade"];

export default function TimeSelection(props) {

    const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(1);
    const [selectedDateRange, setSelectedDateRange] = useState(getFullPeriodDateRange(periodOptions[selectedPeriodIndex], new Date()));

    function handlePeriodSelectionDidChange(newValue) {
        const pos = periodOptions.findIndex(i => i === newValue);
        setSelectedPeriodIndex(pos);
        setSelectedDateRange(getFullPeriodDateRange(periodOptions[pos], selectedDateRange[0]));
    }

    function handleCalendarDateSelectionDidChange(newValue) {
        setSelectedDateRange(getFullPeriodDateRange(periodOptions[selectedPeriodIndex], newValue));
    }

    return (
        <div>
            <Selection options={periodOptions} selectedOption={periodOptions[selectedPeriodIndex]} onChange={(newValue) => handlePeriodSelectionDidChange(newValue)} />
            <Calendar 
                value = {selectedDateRange}
                minDate={props.startDate}
                maxDate={new Date()}
                maxDetail={calendarPeriodOptions[selectedPeriodIndex+1]}
                minDetail={calendarPeriodOptions[selectedPeriodIndex+1]} 
                selectRange={false}
                showWeekNumbers={true}
                onChange={(date) => handleCalendarDateSelectionDidChange(date)}
            />
        </div>
    )
}

function getFullPeriodDateRange(periodType, date) {
    if (!periodOptions.includes(periodType)) {
        return null;
    }
    const momentDate = moment(date);
    if (periodType === "week") {
        return [momentDate.startOf('isoWeek').toDate(), momentDate.endOf("isoWeek").toDate()]
    }
    return [momentDate.startOf(periodType).toDate(), momentDate.endOf(periodType).toDate()];
}



