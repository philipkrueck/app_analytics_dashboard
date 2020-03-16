import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Selection(props) {
    function handleSelectTimeDurationDidChange(e) {
        props.onChange(e.target.value);
    }

    return ( 
        <select onChange={handleSelectTimeDurationDidChange} defaultValue={props.selectedOption}>
            { props.options.map((option) => {
                return (<option key={option}>{option}</option>)
            })}
        </select>
    );
}

export default function TimeSelection() {
    const calendarPeriodOptions = ["week", "month", "year", "decade"];
    const periodOptions = ["week", "month", "year"];

    const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(2);

    function handleSelectionDidChange(newValue) {
        const pos = periodOptions.findIndex(i => i === newValue);
        setSelectedPeriodIndex(pos);
    }

    return (
        <div>
            <Selection options={periodOptions} selectedOption={periodOptions[2]} onChange={(newValue) => handleSelectionDidChange(newValue)} />
            <Calendar defaultView={calendarPeriodOptions[selectedPeriodIndex+1]} minDate={new Date(2017, 5, 5)} maxDate={new Date()} maxDetail={calendarPeriodOptions[selectedPeriodIndex+1]} minDetail={"year"} selectRange={true}/>
        </div>
    )
}


