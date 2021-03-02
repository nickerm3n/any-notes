import {
  changeNoteAction,
  Note,
  NoteChangePayload,
  removeNoteAction,
  selectNotes,
} from '../../reducers/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const useNoteCard = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectNotes);

  const { selectedNote } = state;

  const changeNote = (payload: NoteChangePayload) => dispatch(changeNoteAction(payload));
  const removeNote = (payload: Note) => dispatch(removeNoteAction(payload));

  return {
    selectedNote,
    changeNote,
    removeNote,
  };
};
