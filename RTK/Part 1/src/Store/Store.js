import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CounterSlice.js";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
