import { createSlice } from "@reduxjs/toolkit";

const GPTsearchslice=createSlice({
    name:"GTP",
    initialState:{
        ToggleBtn:false
    },
    reducers:{
        addToggleBtn:(state)=>{
         state.ToggleBtn=!state.ToggleBtn
        }
    }
})

export default GPTsearchslice.reducer;
export const {addToggleBtn}=GPTsearchslice.actions