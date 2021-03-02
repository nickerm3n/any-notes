import React from 'react';
import { AddNoteButton } from './AddNoteButton';
import { useAppDispatch } from '../../../hooks';
import { addNoteAction } from '../../../reducers/notes/notesSlice';

export const AddNoteButtonContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addNoteAction());
  };

  return <AddNoteButton onClick={handleClick} />;
};
