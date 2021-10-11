import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

/* Using createSlice we are allowed to modify the sate */
const counterSlice = createSlice({ //preparing a slice of our global state
    name: 'counter', 
    initialState: initialCounterState,
    reducers: { //we dont need to write our own if checks anymore
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload; //payload is the name of the property which will hold any extra data you might be dispatching
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;