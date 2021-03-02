import React from 'react';
import { Note } from '../reducers/notes/notesSlice';

export const NotesContex = React.createContext<Note[]>([]);
