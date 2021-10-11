/* This create a store is similar to create a context */
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        //the reducer will not be merged with the exdisting state. They will overwrite the existing state
        return { //returns a new state
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;