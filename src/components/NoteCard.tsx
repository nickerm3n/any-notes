import React from 'react';
import { Box, makeStyles, TextareaAutosize } from '@material-ui/core';
import { Tools } from './Tools';

import { useAppDispatch, useAppSelector } from '../hooks';
import { increment, decrement, selectCount } from '../reducers/counter/counterSlice';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4),
    position: 'relative',
  },
  header: {
    marginBottom: theme.spacing(2),
    '& span': {
      fontWeight: 600,
      color: '#a9a9a9',
      paddingRight: theme.spacing(2),
    },
    '& input': {
      fontSize: 24,
      fontWeight: 600,
      background: 'transparent',
    },
  },
  textarea: {
    width: '80%',
    border: 'none',
    background: 'transparent',
  },
  toolsWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

export const NoteCard: React.FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>INC</button>{' '}
        <button onClick={() => dispatch(decrement())}>DEC</button>
      </div>
      <Box className={classes.header} display={'flex'} alignItems={'flex-end'}>
        <span>H1</span>
        <input />
      </Box>
      <TextareaAutosize className={classes.textarea} />
      <div className={classes.toolsWrapper}>
        <Tools />
      </div>
    </div>
  );
};
