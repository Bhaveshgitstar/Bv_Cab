import { createSlice } from "@reduxjs/toolkit";

const initialState={
   start:{
    lat:0,
    lon:0
   },
   dest:{
    start:{
        lat:0,
        lon:0
       }
   }
}

const locationSlice=createSlice({
    name:"location",
    initialState,
    reducers:{
        setStartLocation:(state,action)=>{
                state.start=action.payload;
        },
        setDestLocation:(state,action)=>{
                state.dest=action.payload;
        }
    }
})

export const {setStartLocation,setDestLocation}=locationSlice.actions;
export default locationSlice.reducer;