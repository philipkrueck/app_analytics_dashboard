import React, {useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import Selection from './Selection'

const periodOptions = ["week", "month", "year"];
const calendarPeriodOptions = ["week", "month", "year", "decade"];

export default function TimeSelection(props) {

    const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(1);

    function handlePeriodSelectionDidChange(newValue) {
        const pos = periodOptions.findIndex(i => i === newValue);
        setSelectedPeriodIndex(pos);
        props.onChange(getFullPeriodDateRange(periodOptions[pos], props.selectedDateRange[0]));
    }

    function handleCalendarDateSelectionDidChange(newValue) {
        props.onChange(getFullPeriodDateRange(periodOptions[selectedPeriodIndex], newValue));
    }

    return (
        <div>
            <Selection options={periodOptions} selectedOption={periodOptions[selectedPeriodIndex]} onChange={(newValue) => handlePeriodSelectionDidChange(newValue)} />
            <Calendar 
                value = {props.selectedDateRange}
                minDate={props.minimumDate}
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

export function getFullPeriodDateRange(periodType, date) {
    if (!periodOptions.includes(periodType)) {
        return null;
    }
    const momentDate = moment(date);
    if (periodType === "week") {
        return [momentDate.startOf('isoWeek').toDate(), momentDate.endOf("isoWeek").toDate()]
    }
    return [momentDate.startOf(periodType).toDate(), momentDate.endOf(periodType).toDate()];
}



