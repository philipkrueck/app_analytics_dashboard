import React, { useState, useEffect } from 'react'

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

function TimeSelection(props) {
    const periodOptions = ["Woche", "Monat", "Jahr", "Gesamt"];
    const [selectedPeriod, setSelectedPeriod] = useState(periodOptions[1]);

    const [specificPeriodOptions, setSpecificPeriodOptions] = useState(getSpecificTimePeriodOptions(selectedPeriod, periodOptions));
    const [selectedSpecificPeriod, setSelectedSpecificPeriod] = useState(specificPeriodOptions !== null ? specificPeriodOptions[0] : null);

    useEffect(() => {
        props.onChange(selectedPeriod, selectedSpecificPeriod);
    });
    

    function periodSelectionDidChange(newValue) {
        setSelectedPeriod(newValue);
        const newSpecificTimePeriodOptions = getSpecificTimePeriodOptions(newValue, periodOptions)
        setSpecificPeriodOptions(newSpecificTimePeriodOptions);
        setSelectedSpecificPeriod(newSpecificTimePeriodOptions !== null ? newSpecificTimePeriodOptions[0] : null)
    }

    function specificPeriodSelectionDidChange(newValue) {
        setSelectedSpecificPeriod(newValue);
    }

    function specificPeriodSelection() {
        if (selectedSpecificPeriod !== null) {
            return ( <Selection selectedOption={selectedSpecificPeriod} options={specificPeriodOptions} onChange={(newValue) => specificPeriodSelectionDidChange(newValue)}/>);
        }
        return null;
    }

    return (
        <div>
            <Selection selectedOption={selectedPeriod} options={periodOptions} onChange={(newValue) => periodSelectionDidChange(newValue)}/>
            { specificPeriodSelection() }
        </div>
    )
}

function getSpecificTimePeriodOptions(selectedTimePeriod, timePeriodOptions) {
    switch (selectedTimePeriod) {
        case timePeriodOptions[0]:
            return ["Woche 1", "Woche 2", "Woche 3", "Woche 4", "Woche 5", "Woche 6"];
        case timePeriodOptions[1]: 
            return ["Monat 1", "Monat 2", "Monat 3", "Monat 4", "Monat 5", "Monat 6", "Monat 7"];
        case timePeriodOptions[2]:
            return ["2019", "2020"];
        default: 
            return null;
    }
}

export default TimeSelection;
