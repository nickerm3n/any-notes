import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    cursor: 'pointer',
    color: '#adaeae',
  },
}));

export const Tools: React.FC = () => {
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
        <DeleteIcon />
      </button>
    </Box>
  );
};
