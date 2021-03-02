import React from 'react';
import { NotesPreviewList } from './NotesPreviewList';
import { usePreviewList } from './NotesPreviewListHooks';

export const NotesPreviewListContainer: React.FC = () => {
  const { notes, selectNoteAction, noteColorAction } = usePreviewList();

  return (
    <NotesPreviewList
      notes={notes}
      selectNote={selectNoteAction}
      selectNoteColor={noteColorAction}
    />
  );
};
