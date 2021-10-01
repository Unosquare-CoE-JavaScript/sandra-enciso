/* This file i the responsible to rendering that meals list */
import React from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals />
        </ React.Fragment>
    )
};

export default Meals;