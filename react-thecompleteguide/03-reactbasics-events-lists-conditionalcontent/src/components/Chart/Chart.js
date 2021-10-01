/* This component shows the chart bars of the months included in the filtered array  */
import React from "react";

/* Importing the ChartBar */
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues) //calculates the max value in the filtered values

    return (
        <div className="chart">
            { //Renders a ChartBar for each month (only the months included in the filtered array)
                props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}
                />) 
            }
        </div>
    )
};

export default Chart;