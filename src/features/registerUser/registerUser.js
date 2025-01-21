import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    users: [
        {
            'name': 'Eugene',
            'last-name': 'Skrypnyk',
            'age': 22,
            'email': 'test@gmail.com',

        },
    ]
}

const registerUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addNewUser(state, action) {
            state.push(action.payload);
        },
    },
})


export const {addNewUser} = registerUserSlice.actions
export default registerUserSlice.reducer