import {createSlice, current} from '@reduxjs/toolkit'


const initialState = {
    users: [
        {
            name: 'Eugene',
            lastName: 'Skrypnyk',
            age: 22,
            email: 'test@gmail.com',

        },
    ],
    currentUser: null,
    error: null,
}

const registerUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addNewUser(state, action) {
            const existingUser = state.users.some(user => user.email === action.payload.email);
            if (existingUser) {
                state.error = 'Пользователь с таким email уже существует!';
                return;
            }
            state.error = null;
            state.users.push(action.payload);
            console.log(JSON.stringify(state.users, null, 2));
        },
        emptyField(state) {
            state.error = 'Заполните поля';
        },
        clearError(state) {
            state.error = null;
        },
        login(state, action) {
            const user = state.users.find(user => user.email === action.payload.email);
            console.log(JSON.stringify(user, null, 2));
            if (!user) {
                state.error = 'Email not found';
                return;
            }

            if (user.name !== action.payload.name) {
                state.error = 'Name does not match';
                return;
            }
            state.currentUser = user;
            console.log(JSON.stringify(state.currentUser,null,2));
            state.error = null;
        }

    },
})


export const {addNewUser, clearError, emptyField, login} = registerUserSlice.actions
export default registerUserSlice.reducer