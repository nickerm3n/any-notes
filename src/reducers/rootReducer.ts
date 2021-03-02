import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import notesReducer from './notes/notesSlice';
import trashReducer from './trash/trashSlice';
import userReducer from './user/userSlice';
import photoReducer from './photos/photosSlice';
import searchReducer from './search/searchSlice';

export default combineReducers({
  counter: counterReducer,
  notes: notesReducer,
  trash: trashReducer,
  user: userReducer,
  photo: photoReducer,
  search: searchReducer,
});
