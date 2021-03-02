import {
  changeNoteAction,
  Note,
  NoteChangePayload,
  NoteColorPayload,
  removeNoteAction,
  selectNote,
  selectNoteColor,
  selectNotes,
} from '../../reducers/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const usePreviewList = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectNotes);

  const { notes } = state;

  const selectNoteAction = (payload: Note) => dispatch(selectNote(payload));
  const noteColorAction = (payload: NoteColorPayload) => dispatch(selectNoteColor(payload));

  return {
    notes,
    selectNoteAction,
    noteColorAction,
  };
};
