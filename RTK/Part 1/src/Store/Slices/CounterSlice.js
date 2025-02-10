

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (state.count === 0) {
                alert("Count can't be less than 0")
                return;
            }
            state.count -= 1

        },
        reSet: (state) => {
            state.count = 0
        },
        add: (state, action) => {
            state.count += action.payload
        },
        subtract: (state, action) => {
            state.count -= action.payload
        }
    }
})
export const { increment, decrement, reSet, add, subtract } = counterSlice.actions;

export default counterSlice.reducer;
