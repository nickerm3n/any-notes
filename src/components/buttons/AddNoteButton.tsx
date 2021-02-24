import React from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    cursor: 'pointer',
    transform: 'translateY(1px)',
    '& svg': {
      color: '#adaeae',
      '&:hover': {
        color: 'darkgrey',
      },
    },
  },
}));

export const AddNoteButton: React.FC = () => {
  const classes = useStyles();

  return (
    <button className={classes.button}>
      <NoteAddIcon />
    </button>
  );
};
