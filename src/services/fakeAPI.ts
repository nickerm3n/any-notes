import uuidv4 from './uuid';
import { Note } from '../reducers/notes/notesSlice';

const fakeNotes = [
  {
    id: uuidv4(),
    header: 'My Notes 1',
    body: "Hey hey hey, I'm taking notes. WOOP!",
  },
  {
    id: uuidv4(),
    header: 'My Notes 2',
    body: "Hey hey hey, I'm taking notes. WOOP!",
  },
  {
    id: uuidv4(),
    header: 'My Notes 3',
    body: "Hey hey hey, I'm taking notes. WOOP!",
  },
];

export const fakeAPI = (): Promise<Note[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeNotes);
    }, 1500);
  });
};
