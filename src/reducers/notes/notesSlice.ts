import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import { createNote } from '../../utils';
import { DEFAULT_NOTE_COLOR } from '../../utils/constants';
import { addToTrash } from '../trash/trashSlice';

export type Note = {
  id: string;
  header: string;
  body: string;
  color: string;
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
  color: DEFAULT_NOTE_COLOR,
};

export type NoteChangePayload = {
  noteId: string;
  name: keyof Note;
  value: string;
};

export type NoteColorPayload = {
  noteId: string;
  color: string;
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
    selectNoteColor: (state, action: PayloadAction<NoteColorPayload>) => {
      const { noteId, color } = action.payload;

      state.notes = state.notes.map(note => {
        if (note.id === noteId) {
          note.color = color;
        }
        return note;
      });
    },
    removeNote: (state, action: PayloadAction<Note>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload.id);
    },
    clearSelected: (state): void => {
      state.selectedNote = initialSelectedNote;
    },
  },
});

export const {
  addNote,
  selectNote,
  updateSelectedNote,
  changeNote,
  selectNoteColor,
  removeNote,
  clearSelected,
} = notesSlice.actions;

export const addNoteAction = () => (dispatch: AppDispatch): void => {
  const newNote = createNote();

  dispatch(addNote(newNote));
  dispatch(selectNote(newNote));
};

export const changeNoteAction = (payload: NoteChangePayload) => (dispatch: AppDispatch): void => {
  dispatch(updateSelectedNote(payload));
  dispatch(changeNote(payload));
};

export const removeNoteAction = (payload: Note) => (dispatch: AppDispatch) => {
  dispatch(removeNote(payload));
  dispatch(addToTrash(payload));
  dispatch(clearSelected());
};

export const selectNotes = (state: RootState): NotesState => state.notes;

export default notesSlice.reducer;
