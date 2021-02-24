import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    color: '#959696',
    background: '#ececec',
    position: 'relative',
    '& h2': {
      color: '#242526',
      fontWeight: 600,
      fontSize: 18,
      marginBottom: theme.spacing(1),
    },
  },
  ribbon: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    background: 'tomato',
  },
}));

export const NotePreviewCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Box p={2} className={classes.card}>
      <h2>My Notes</h2>
      <p>Hey hey hey, I'm taking notes. WOOP!</p>
      <span className={classes.ribbon} />
    </Box>
  );
};
