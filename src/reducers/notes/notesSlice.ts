import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import { createNote } from '../../utils/createNote';

export type Note = {
  id: string;
  header: string;
  body: string;
};

export type NotesState = {
  loading: boolean;
  notes: Note[];
  selectedNote: Note;
  error: Error | null;
};

const initialSelectedNote: Note = {
  id: '',
  header: '',
  body: '',
};

export type NoteChangePayload = {
  noteId: string;
  name: string;
  value: string;
};

const initialState: NotesState = {
  loading: false,
  notes: [],
  selectedNote: initialSelectedNote,
  error: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [action.payload, ...state.notes];
    },
    selectNote: (state, action: PayloadAction<Note>) => {
      state.selectedNote = action.payload;
    },
    updateSelectedNote: (state, action: PayloadAction<NoteChangePayload>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.selectedNote[action.payload.name] = action.payload.value;
    },
    changeNote: (state, action: PayloadAction<NoteChangePayload>) => {
      const { noteId, name, value } = action.payload;

      state.notes = state.notes.map(note => {
        if (note.id === noteId) {
          return {
            ...note,
            [name]: value,
          };
        }
        return note;
      });
    },
  },
});

export const { addNote, selectNote, updateSelectedNote, changeNote } = notesSlice.actions;

export const addNoteAction = () => (dispatch: AppDispatch): void => {
  const newNote = createNote();

  dispatch(addNote(newNote));
  dispatch(selectNote(newNote));
};

export const changeNoteAction = (payload: NoteChangePayload) => (
  dispatch: AppDispatch,
  getState: () => RootState,
): void => {
  const { selectedNote } = getState().notes;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (selectedNote[payload.name] !== payload.value) {
    dispatch(updateSelectedNote(payload));
  }
  dispatch(changeNote(payload));
};

export const selectNotes = (state: RootState): NotesState => state.notes;

export default notesSlice.reducer;
