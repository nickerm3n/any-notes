// Use throughout your app instead of plain `useDispatch` and `useSelector`
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import {
  addNoteAction,
  changeNoteAction,
  Note,
  NoteChangePayload,
  NoteColorPayload,
  removeNoteAction,
  selectNote,
  selectNoteColor,
  selectNotes,
} from './reducers/notes/notesSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useNotes = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectNotes);

  const { notes, selectedNote } = state;

  const dispatchAddNote = () => dispatch(addNoteAction());
  const dispatchSelectNote = (payload: Note) => dispatch(selectNote(payload));
  const dispatchChangeNote = (payload: NoteChangePayload) => dispatch(changeNoteAction(payload));
  const dispatchSelectNoteColor = (payload: NoteColorPayload) => dispatch(selectNoteColor(payload));
  const dispatchRemoveNote = (payload: Note) => dispatch(removeNoteAction(payload));

  return {
    notes,
    selectedNote,
    dispatchAddNote,
    dispatchSelectNote,
    dispatchChangeNote,
    dispatchSelectNoteColor,
    dispatchRemoveNote,
  };
};
