import React from 'react';
import { Board } from '../components/Board';
import { NoteCardContainer } from '../components/NoteCard/NoteCardContainer';
import { Box, makeStyles } from '@material-ui/core';
import { Search } from '../components/Search';
import { NotesPreviewListContainer } from '../components/NotesPreviewList/NotesPreviewListContainer';
import { AddNoteButtonContainer } from '../components/buttons/AddNoteButton/AddNoteButtonContainer';
import { BackgroundContainer } from '../components/BackgroundContainer';

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

export const Notes: React.FC = () => {
  const classes = useStyles();

  return (
    <BackgroundContainer>
      <Board
        leftComp={() => (
          <>
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
              <AddNoteButtonContainer />
            </Box>
            <NotesPreviewListContainer />
          </>
        )}
        rightComp={NoteCardContainer}
      />
    </BackgroundContainer>
  );
};
