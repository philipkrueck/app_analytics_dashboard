import React, {useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import Selection from './Selection'
import * as DateConversion from './DateConversion'

// const periodOptions = ["week", "month", "year"];
// const calendarPeriodOptions = ["week", "month", "year", "decade"];

export default function TimeSelection(props) {

    // const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(1);
    const [selectedDateRange, setSelectedDateRange] = useState(DateConversion.getFullPeriodDateRange(props.periodOptions[props.selectedPeriodIndex], props.periodOptions, new Date()));

    function handlePeriodSelectionDidChange(newValue) {
        const pos = props.periodOptions.findIndex(i => i === newValue);
        setSelectedPeriodIndex(pos);
        setSelectedDateRange(DateConversion.getFullPeriodDateRange(props.periodOptions[pos], props.periodOptions, selectedDateRange[0]));
    }

    function handleCalendarDateSelectionDidChange(newValue) {
        console.log(newValue);
        // props.onChange();
        // setSelectedDateRange(getFullPeriodDateRange(props.periodOptions[selectedPeriodIndex], props.periodOptions, newValue));
    }

    return (
        <div>
            <Selection options={props.periodOptions} selectedOption={props.periodOptions[selectedPeriodIndex]} onChange={(newValue) => handlePeriodSelectionDidChange(newValue)} />
            <Calendar 
                value = {selectedDateRange}
                minDate={props.startDate}
                maxDate={new Date()}
                maxDetail={props.calendarPeriodOptions[selectedPeriodIndex+1]}
                minDetail={props.calendarPeriodOptions[selectedPeriodIndex+1]} 
                selectRange={false}
                showWeekNumbers={true}
                onChange={(date) => handleCalendarDateSelectionDidChange(date)}
            />
        </div>
    )
}



