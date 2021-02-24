import React from 'react';
import { NotesPreviewList } from './NotesPreviewList';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Search } from './Search';
import { AddNoteButton } from './buttons/AddNoteButton';
import { NoteCard } from './NoteCard';

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
}));

export const Board: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.board}>
      <Grid container className={classes.container}>
        <Grid item xs={5} className={classes.leftCol}>
          <Box display={'flex'} p={2} alignItems={'center'} justifyContent={'space-between'}>
            <div className={classes.searchWrapper}>
              <Search />
            </div>
            <AddNoteButton />
          </Box>
          <NotesPreviewList />
        </Grid>
        <Grid item xs={7}>
          <NoteCard />
        </Grid>
      </Grid>
    </div>
  );
};
