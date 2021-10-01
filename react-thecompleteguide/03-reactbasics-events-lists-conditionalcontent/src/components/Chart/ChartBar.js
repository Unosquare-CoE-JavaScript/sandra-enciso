/* This component creates a CharBar to be shown in the Chart  */
import React from 'react';

import './ChartBar.css';

const ChartBar = props => { //recieves the max Value of the data filtered
    let barFillHeight = '0%';

    if(props.maxValue > 0 ){ 
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; //Calculates the percentage to be filled in the bar
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight }}></div> {/* the percentage to be filled */}
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
};

export default ChartBar;