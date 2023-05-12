import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './errorSlice';

const store = configureStore({
  reducer: {
    error: errorReducer,
  },
});

export default store;
