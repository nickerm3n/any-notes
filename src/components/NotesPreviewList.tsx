import React from 'react';
import { NotePreviewCard } from './NotePreviewCard';

export const NotesPreviewList: React.FC = () => {
  return (
    <ul>
      <li>
        <NotePreviewCard />
      </li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
