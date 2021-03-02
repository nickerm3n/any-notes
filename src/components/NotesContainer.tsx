import React from 'react';
import { NotesContex } from './NotesProvider';
import { BackgroundContainer } from './BackgroundContainer';
import { Board } from './Board';
import { LeftColWrapper } from './LeftColWrapper';
import { NoteCardContainer } from './NoteCard/NoteCardContainer';
import { Note } from '../reducers/notes/notesSlice';

type Props = {
  notes: Note[];
};

export const NotesContainer: React.FC<Props> = ({ notes }) => {
  return (
    <NotesContex.Provider value={notes}>
      <BackgroundContainer>
        <Board leftComp={LeftColWrapper} rightComp={NoteCardContainer} />
      </BackgroundContainer>
    </NotesContex.Provider>
  );
};
