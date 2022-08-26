import { configureStore } from "@reduxjs/toolkit";
import BookReducers from "../features/books/BookSlice"
/* import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
 */

const store = configureStore({
  reducer:{
    bookrducer:BookReducers
  }
})
export default store;