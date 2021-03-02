import React from 'react';
import { NoteCard } from './NoteCard';
import { useNoteCard } from './NoteCardHooks';

export const NoteCardContainer: React.FC = () => {
  const { selectedNote, changeNote, removeNote } = useNoteCard();

  return <NoteCard note={selectedNote} noteChange={changeNote} removeNote={removeNote} />;
};
