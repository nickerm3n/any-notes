import React from 'react';
import { NotePreviewCard } from './NotePreviewCard';
import { Note } from '../reducers/notes/notesSlice';

type Props = {
  notes: Note[];
};

export const NotesPreviewList: React.FC<Props> = ({ notes }) => {
  return (
    <ul>
      {notes.map(note => (
        <li style={{ margin: 2 }} key={note.id}>
          <NotePreviewCard note={note} />
        </li>
      ))}
    </ul>
  );
};
