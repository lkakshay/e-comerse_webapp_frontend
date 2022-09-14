import { configureStore } from "@reduxjs/toolkit";
import MediaqueryReducer from "../reducers/MediaqueryReducer";
import authReducer from "../reducers/authReducer";
import productReducer from "../reducers/productReducer";
import cartReducer from "../reducers/cartReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['MediaqueryReducer',"authReducer","cartReducer"]
};

const userPersistConfig = {
  key: "user",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  MediaqueryReducer,
  authReducer: persistReducer(userPersistConfig, authReducer),
  productReducer,
  cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
