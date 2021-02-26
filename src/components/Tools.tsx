import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import { Note } from '../reducers/notes/notesSlice';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    cursor: 'pointer',
    color: '#adaeae',
  },
}));

type Props = {
  note: Note;
  removeNote: (payload: Note) => void;
};

export const Tools: React.FC<Props> = ({ note, removeNote }) => {
  const classes = useStyles();

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <button className={classes.button}>
        <InfoIcon />
      </button>
      <button className={classes.button}>
        <ShareIcon />
      </button>
      <button className={classes.button}>
        <ArchiveIcon />
      </button>
      <button className={classes.button} onClick={() => removeNote(note)}>
        <DeleteIcon />
      </button>
    </Box>
  );
};
