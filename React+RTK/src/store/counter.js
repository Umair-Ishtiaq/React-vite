import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;
        },
        Add: (state, action) => {

            state.counterVal += parseInt(action.payload.num);
        },
        Subtract: (state, action) => {
            state.counterVal -= parseInt(action.payload.num);

        },
    }
})
export const counterActions = counterSlice.actions;
export default counterSlice;