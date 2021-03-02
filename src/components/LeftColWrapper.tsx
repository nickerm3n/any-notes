import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SearchContainer } from './Search/SearchContainer';
import { AddNoteButtonContainer } from './buttons/AddNoteButton/AddNoteButtonContainer';
import { NotesPreviewListContainer } from './NotesPreviewList/NotesPreviewListContainer';

const useStyles = makeStyles(() => ({
  searchWrapper: {
    width: 'calc(100% - 44px)',
  },
  box: {
    borderBottom: '1px solid #dedede',
  },
}));

export const LeftColWrapper: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        p={2}
        className={classes.box}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div className={classes.searchWrapper}>
          <SearchContainer />
        </div>
        <AddNoteButtonContainer />
      </Box>
      <NotesPreviewListContainer />
    </>
  );
};
