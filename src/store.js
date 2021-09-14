
import chatReducer from './Chat/chatSlice'
import dogReducer from './Dog/dogSlice'
import thunkMiddleware from 'redux-thunk'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["dog"],
};

const reducers = combineReducers({ chat: chatReducer, dog: dogReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware],
});

