import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import MovieSlice from "./movieSlice"
import GPTsearchSlice from "./GPTsearchSlice";
import langSlice from "./LangSlice"

const appStore = configureStore({
    reducer:{
     user:appReducer,
     movie:MovieSlice,
     GTP:GPTsearchSlice,
     lang:langSlice
    }
})

export default appStore;