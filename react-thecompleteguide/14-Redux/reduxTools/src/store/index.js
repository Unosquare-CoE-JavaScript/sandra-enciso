import { configureStore } from '@reduxjs/toolkit';
/*When you work with multiple slices, you still hace one Redux store, so you still only call onfigureStore once*/

import counterReducer from './counter';
import authReducer from './auth';

/* For dispatching actions, createSlice automatically creates unique action identifiers for our different reducers
To get hold of these action indentifiers, we can use our counterSlice */

const store = configureStore({ //you can create a map of reducers and this map is then set as value for the main reducer
    reducer: { //store only has one root reducer 
        counter: counterReducer,
        auth: authReducer
    } 
});
/* configureStore, creates a store but it maakes merging multiple reducers into one reducer */


export default store;