import { configureStore } from "@reduxjs/toolkit";
import MediaqueryReducer from "../reducers/MediaqueryReducer";
import authReducer from "../reducers/authReducer";

export const store= configureStore({
   reducer:{
    MediaqueryReducer,
    authReducer

   }
    
})