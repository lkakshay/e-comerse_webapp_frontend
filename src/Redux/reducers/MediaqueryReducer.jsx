
import { createSlice } from "@reduxjs/toolkit";


export const MediaquerySlice=createSlice({
    name:"MediaQuery",
    initialState:{screenSize:""},
    reducers:{
        setScreen:(state,action)=>{
            state.screenSize=action.payload
        }
    }
})

export const {setScreen}=MediaquerySlice.actions
export default MediaquerySlice.reducer