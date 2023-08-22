import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
import asyncReducer from './Reducer'


const store = configureStore({
    reducer: {
        rootReducer: asyncReducer}})

export default store;