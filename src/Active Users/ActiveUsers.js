import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
import TimeSelection from '../General/TimeSelection';
import DeltaComponent from '../General/DeltaComponent';


function ActiveUsers() {

    return (
        <div>
            <h1>Aktive Nutzer</h1>
            <div>
                <div className={"ActiveUsers"}>
                    <div className={"ActiveUsersBubble"}>
                        <p>Daily Active User (DAU)</p>
                    </div>
                    <div className={"ActiveUsersDeltaComponent"}>
                        <p>763 DAU</p>
                        <DeltaComponent oldValue={730} newValue={763} />
                    </div>
                </div>
                <div className={"ActiveUsers"}>
                    <div className={"ActiveUsersBubble"}>
                        <p>Weekly Active User (WAU)</p>
                    </div>
                    <div className={"ActiveUsersDeltaComponent"}>
                        <p>93276 WAU</p>
                        <DeltaComponent oldValue={98300} newValue={93276} />
                    </div>
                </div>
                <div className={"ActiveUsers"}>
                    <div className={"ActiveUsersBubble"}>
                        <p>Monthly Active User (MAU)</p>
                    </div>
                    <div className={"ActiveUsersDeltaComponent"}>
                        <p>7321641 MAU</p>
                        <DeltaComponent newValue={7321641} oldValue={7621641}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveUsers;
