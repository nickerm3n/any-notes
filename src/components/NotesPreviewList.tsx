import React from 'react';
import { NotePreviewCard } from './NotePreviewCard';

export const NotesPreviewList: React.FC = () => {
  return (
    <ul>
      <li style={{ margin: 2 }}>
        <NotePreviewCard />
      </li>
      <li style={{ margin: 2 }}>
        <NotePreviewCard />
      </li>
    </ul>
  );
};
