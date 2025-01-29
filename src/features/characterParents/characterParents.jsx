import { createSlice } from "@reduxjs/toolkit";
import instance from "../../api/request.js";



const initialState = {
    motherId: 21,
    fatherId:0,
}


const characterParents = createSlice({
    name:"characterParents",
    initialState,
    reducers:{
        minusMotherId: (state) =>{
            state.motherId = Math.max(21, state.motherId - 1);
            console.log(state.motherId);
        },
        addMotherId: (state) =>{
            state.motherId = Math.min(45, state.motherId + 1);
        },
        minusFatherId: (state) =>{
            state.fatherId = Math.max(0, state.fatherId - 1);
        },
        addFatherId: (state) =>{
            state.fatherId = Math.min(22, state.fatherId + 1);
        },
    }
})
export const {changeFatherId, minusMotherId,addMotherId, minusFatherId,addFatherId} = characterParents.actions;
export default characterParents.reducer;

