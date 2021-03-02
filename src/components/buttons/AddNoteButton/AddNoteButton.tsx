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

type Props = {
  onClick: () => void;
};

export const AddNoteButton: React.FC<Props> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <button className={classes.button} onClick={onClick}>
      <NoteAddIcon />
    </button>
  );
};
