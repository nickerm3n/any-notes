// Use throughout your app instead of plain `useDispatch` and `useSelector`
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import {
  addNoteAction,
  changeNoteAction,
  NoteChangePayload,
  selectNotes,
} from './reducers/notes/notesSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useNotes = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectNotes);

  const { notes, selectedNote } = state;

  const dispatchAddNote = () => dispatch(addNoteAction());
  const dispatchChangeNote = (payload: NoteChangePayload) => dispatch(changeNoteAction(payload));

  return {
    notes,
    selectedNote,
    dispatchAddNote,
    dispatchChangeNote,
  };
};
