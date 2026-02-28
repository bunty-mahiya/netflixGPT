import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"lang",
    initialState:{
        text:"english"
    },
    reducers:{
        langSelect:(state,action)=>{
            state.text=action.payload
        }
    }
})

export default langSlice.reducer;
export const {langSelect}=langSlice.actions