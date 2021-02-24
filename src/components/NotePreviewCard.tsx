import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    background: '#ececec',
  },
}));

export const NotePreviewCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Box p={2} className={classes.card}>
      <h2>My Notes</h2>
      <p>Hey hey hey, I'm taking notes. WOOP!</p>
    </Box>
  );
};
