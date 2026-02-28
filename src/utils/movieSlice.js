import { createSlice } from "@reduxjs/toolkit"

const MovieSlice=createSlice({
    name:"movie",
    initialState:{
        playMovie:null
    },
    reducers:{
        addMovieData(state,action){
         state.playMovie=action.payload
        }
    }
})

export const{addMovieData}=MovieSlice.actions

export default MovieSlice.reducer