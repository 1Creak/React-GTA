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
        changeMotherId: (state, action) =>{
            state.motherId = action.payload;
        },
        changeFatherId: (state, action) =>{
            state.fatherId = action.payload;
        },
    }
})
export const {changeFatherId, changeMotherId,} = characterParents.actions;
export default characterParents.reducer;

