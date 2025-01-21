import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';
import registerUser from '../features/registerUser/registerUser.js';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        registerUser: registerUser,
    },
});

export default store;
