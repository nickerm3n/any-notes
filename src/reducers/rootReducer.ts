import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import notesReducer from './notes/notesSlice';
import trashReducer from './trash/trashSlice';

export default combineReducers({
  counter: counterReducer,
  notes: notesReducer,
  trash: trashReducer,
});
