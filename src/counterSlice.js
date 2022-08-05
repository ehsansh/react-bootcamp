import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const increment = state => {
    state.value += 1;
};
const decrement = state => {
    state.value -= 1;
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment,
        decrement,
    },
});

export const { increment: incrementAction, decrement: decrementAction } =
    counterSlice.actions;

export default counterSlice.reducer;
