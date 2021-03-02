import React from 'react';
import { Box, makeStyles, Popover, Typography } from '@material-ui/core';
import { Note } from '../reducers/notes/notesSlice';

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
  },
}));

type Props = {
  note: Note;
  selectNote: (payload: Note) => void;
};

export const NotePreviewCard: React.FC<Props> = ({ note, selectNote }) => {
  const classes = useStyles();

  return (
    <Box p={2} className={classes.card} onClick={() => selectNote(note)}>
      <h2>{note.header}</h2>
      <p>{note.body}</p>
      <span className={classes.ribbon} style={{ background: note.color }} />
    </Box>
  );
};
