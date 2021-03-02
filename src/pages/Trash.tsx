import React from 'react';
import { useAppSelector } from '../hooks';
import { selectNotes } from '../reducers/notes/notesSlice';
import { NotesContainer } from '../components/NotesContainer';

export const Trash: React.FC = () => {
  const { notes } = useAppSelector(selectNotes);
  return <NotesContainer notes={notes} />;
};
