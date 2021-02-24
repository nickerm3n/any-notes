import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export default combineReducers({
  counter: counterReducer,
});
