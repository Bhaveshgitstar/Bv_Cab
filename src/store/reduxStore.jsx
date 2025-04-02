import {configureStore} from "@reduxjs/toolkit";
import locationReducer from "./locationSlice";
export const reduxStore=configureStore({
    reducer:{
        location:locationReducer
    },
})