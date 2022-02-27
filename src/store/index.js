// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  // writing initialState this way, makes JS to automatically make to initialState
  // that is to : initialState = initialState
  initialState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});


// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// EXPORTING store SO WE CAN USE IT ELSEWHERE
export default store;


