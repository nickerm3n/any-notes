import React from 'react';
import { NotePreviewCard } from './NotePreviewCard';
import { Note, NoteColorPayload } from '../reducers/notes/notesSlice';
import { SettingPopover } from './SettingPopover';

type Props = {
  notes: Note[];
  selectNote: (payload: Note) => void;
  selectNoteColor: (payload: NoteColorPayload) => void;
};

export const NotesPreviewList: React.FC<Props> = ({ notes, ...rest }) => {
  return (
    <ul>
      {notes.map(note => (
        <li style={{ margin: 2 }} key={note.id}>
          <div style={{ position: 'relative' }}>
            <NotePreviewCard note={note} {...rest} />
            <SettingPopover note={note} {...rest} />
          </div>
        </li>
      ))}
    </ul>
  );
};
