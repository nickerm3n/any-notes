import uuid from '../services/uuid';
import { BODY_PLACEHOLDER, DEFAULT_NOTE_COLOR, HEADER_PLACEHOLDER } from './constants';
import { Note } from '../reducers/notes/notesSlice';

export const createNote = (): Note => ({
  id: uuid(),
  header: HEADER_PLACEHOLDER,
  body: BODY_PLACEHOLDER,
  color: DEFAULT_NOTE_COLOR,
});

export const checkEmptyNote = (note: Note): boolean => {
  return !Boolean(note.header) && !Boolean(note.body);
};

export const checkHeaderPlaceholder = (note: Note): string => {
  return note.header === HEADER_PLACEHOLDER ? '' : note.header;
};

export const checkBodyPlaceholder = (note: Note): string => {
  return note.body === BODY_PLACEHOLDER ? '' : note.body;
};

export const checkPlaceholder = (note: Note): boolean => {
  return !Boolean(checkHeaderPlaceholder(note)) && !Boolean(checkBodyPlaceholder(note));
};
