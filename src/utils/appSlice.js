import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
          return action.payload;
        },
        userRemove:(state,action)=>{
          return null;
        }
    }
})

export const {addUser,userRemove}=appSlice.actions;
export default appSlice.reducer;