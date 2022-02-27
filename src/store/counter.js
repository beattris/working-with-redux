import { createSlice } from "@reduxjs/toolkit";

// The slice to manage the counter state
const initialCounterState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  // writing initialState this way, makes JS to automatically make to initialState
  // that is to : initialState = initialState
  initialState: initialCounterState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;