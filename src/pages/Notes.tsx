import React, { useEffect } from 'react';
import { Board } from '../components/Board';
import { useNotes } from '../hooks';

export const Notes: React.FC = () => {
  const { notes, selectedNote, ...options } = useNotes();
  return <Board notes={notes} selectedNote={selectedNote} options={options} />;
};
