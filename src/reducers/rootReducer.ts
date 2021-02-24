import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import notesReducer from './notes/notesSlice';

export default combineReducers({
  counter: counterReducer,
  notes: notesReducer,
});
