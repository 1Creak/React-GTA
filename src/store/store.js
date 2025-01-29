import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';
import registerUser from '../features/registerUser/registerUser.js';
import characterParentsList from "../features/characterParents/characterParents.jsx";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        registerUser: registerUser,
        characterParentsList: characterParentsList,
    },
});

export default store;
