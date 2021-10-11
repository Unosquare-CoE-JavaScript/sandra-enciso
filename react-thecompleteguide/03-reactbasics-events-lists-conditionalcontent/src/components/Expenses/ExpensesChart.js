/* This component shows a chart for the filtered elements */
import React from "react";

/* imports the Chart */
import Chart from "../Chart/Chart";

const ExpensesChart = props => {
    const chartDataPoints = [ /* Points of the Chart (Months) */
        { label: 'Jan', value: 0},
        { label: 'Feb', value: 0},
        { label: 'Mar', value: 0},
        { label: 'Apr', value: 0},
        { label: 'May', value: 0},
        { label: 'Jun', value: 0},
        { label: 'Jul', value: 0},
        { label: 'Aug', value: 0},
        { label: 'Sep', value: 0},
        { label: 'Oct', value: 0},
        { label: 'Nov', value: 0},
        { label: 'Dec', value: 0},
    ];

    /* Reasigning prop value to chartDataPoints */
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    //Updated chartDataPoints
    return <Chart dataPoints={chartDataPoints} /> //Renders the Chart with the data points
};

export default ExpensesChart;