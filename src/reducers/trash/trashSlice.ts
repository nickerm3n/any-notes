import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import { Note, NoteChangePayload, NotesState } from '../notes/notesSlice';

type TrashState = {
  notes: Note[];
};

const initialState: TrashState = {
  notes: [],
};

export const trashSlice = createSlice({
  name: 'trash',
  initialState,
  reducers: {
    addToTrash: (state, action: PayloadAction<Note>) => {
      state.notes = state.notes.concat(action.payload);
    },
  },
});

export const { addToTrash } = trashSlice.actions;

export const selectTrash = (state: RootState): TrashState => state.trash;

export default trashSlice.reducer;
