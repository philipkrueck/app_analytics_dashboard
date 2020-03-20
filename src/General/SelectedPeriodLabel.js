import React from 'react'
import moment from 'moment';

export default function SelectedPeriodLabel(props) {
    const startDate = moment(props.startDate).format("DD.MM.YYYY");
    const endDate = moment(props.endDate).format("DD.MM.YYYY");
    return (
        <div>
            <p> | {startDate + " bis " + endDate}</p>
        </div>
        
    );
}
