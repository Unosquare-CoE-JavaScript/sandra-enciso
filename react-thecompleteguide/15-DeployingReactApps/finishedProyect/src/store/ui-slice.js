/*
Create Slice. A function that accepts an initial state, an object of reducer functions, and a "slice name", 
and automatically generates action creators and action types that correspond to the reducers and state.
*/
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui', //we can access to this slice using the name
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;