import { configureStore } from "@reduxjs/toolkit";
import MediaqueryReducer from "../reducers/MediaqueryReducer";

export const store= configureStore({
   reducer:{
    MediaqueryReducer
   }
    
})