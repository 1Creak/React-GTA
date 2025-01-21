import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    users: [
        {
            name: 'Eugene',
            lastName: 'Skrypnyk',
            age: 22,
            email: 'test@gmail.com',

        },
    ]
}

const registerUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addNewUser(state, action) {
            const existingUser = state.users.some(user => user.email === action.payload.email);
            if (existingUser) {
                console.log('Пользователь с таким email уже существует!');
                return;
            }
            state.users.push(action.payload);
            console.log(JSON.stringify(state.users,null,2));
        },
    },
})


export const {addNewUser} = registerUserSlice.actions
export default registerUserSlice.reducer