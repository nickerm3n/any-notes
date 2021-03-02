import React, { useContext, useMemo } from 'react';
import { NotesPreviewList } from './NotesPreviewList';
import { usePreviewList } from './NotesPreviewListHooks';
import { selectSearch } from '../../reducers/search/searchSlice';
import { useAppSelector } from '../../hooks';
import { NotesContex } from '../NotesProvider';

export const NotesPreviewListContainer: React.FC = () => {
  const notes = useContext(NotesContex);
  const { selectNoteAction, noteColorAction } = usePreviewList();
  const { value } = useAppSelector(selectSearch);

  const computedNotes = useMemo(() => {
    return notes.filter(note => note.header.includes(value) || note.body.includes(value));
  }, [notes, value]);

  return (
    <NotesPreviewList
      notes={computedNotes}
      selectNote={selectNoteAction}
      selectNoteColor={noteColorAction}
    />
  );
};
