import React from 'react'

export default function Selection(props) {
    function handleSelectTimeDurationDidChange(e) {
        props.onChange(e.target.value);
    }

    return ( 
        <select onChange={handleSelectTimeDurationDidChange} value={props.selectedOption}>
            { props.options.map((option) => {
                return (<option key={option} value={option}>{option}</option>)
            })}
        </select>
    );
}
