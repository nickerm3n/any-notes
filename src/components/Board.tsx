import React from 'react';
import { NotesPreviewList } from './NotesPreviewList';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Search } from './Search';
import { AddNoteButton } from './buttons/AddNoteButton';
import { NoteCard } from './NoteCard/NoteCard';
import {
  Note,
  NoteChangePayload,
  NoteColorPayload,
  NotesState,
  selectNote,
  selectNoteColor,
} from '../reducers/notes/notesSlice';

const useStyles = makeStyles(() => ({
  board: {
    flexGrow: 1,
    borderRight: '1px solid #dedede',
  },
  container: {
    height: '100%',
  },
  leftCol: {
    borderRight: '1px solid #dedede',
  },
  searchWrapper: {
    width: 'calc(100% - 44px)',
  },
  box: {
    borderBottom: '1px solid #dedede',
  },
}));

type Props = {
  notes: NotesState['notes'];
  selectedNote: NotesState['selectedNote'];
  options: {
    dispatchAddNote: () => void;
    dispatchSelectNote: (payload: Note) => void;
    dispatchChangeNote: (payload: NoteChangePayload) => void;
    dispatchSelectNoteColor: (payload: NoteColorPayload) => void;
    dispatchRemoveNote: (payload: Note) => void;
  };
};

export const Board: React.FC<Props> = ({ notes, selectedNote, options }) => {
  const classes = useStyles();

  return (
    <div className={classes.board}>
      <Grid container className={classes.container}>
        <Grid item xs={5} className={classes.leftCol}>
          <Box
            p={2}
            className={classes.box}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <div className={classes.searchWrapper}>
              <Search />
            </div>
            <AddNoteButton onClick={options.dispatchAddNote} />
          </Box>
          <NotesPreviewList
            notes={notes}
            selectNote={options.dispatchSelectNote}
            selectNoteColor={options.dispatchSelectNoteColor}
          />
        </Grid>
        <Grid item xs={7}>
          <NoteCard
            note={selectedNote}
            noteChange={options.dispatchChangeNote}
            removeNote={options.dispatchRemoveNote}
          />
        </Grid>
      </Grid>
    </div>
  );
};
