import uuidv4 from './uuid';
import { Note } from '../reducers/notes/notesSlice';
import { DEFAULT_NOTE_COLOR } from '../utils/constants';

const fakeNotes = [
  {
    id: uuidv4(),
    header: 'My Notes 1',
    body: "Hey hey hey, I'm taking notes. WOOP!",
    color: DEFAULT_NOTE_COLOR,
  },
  {
    id: uuidv4(),
    header: 'My Notes 2',
    body: "Hey hey hey, I'm taking notes. WOOP!",
    color: DEFAULT_NOTE_COLOR,
  },
  {
    id: uuidv4(),
    header: 'My Notes 3',
    body: "Hey hey hey, I'm taking notes. WOOP!",
    color: DEFAULT_NOTE_COLOR,
  },
];

export const fakeAPI = (): Promise<Note[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fakeNotes);
    }, 1500);
  });
};
