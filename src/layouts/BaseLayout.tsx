import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Nav } from '../components/Nav';

const useStyles = makeStyles(() => ({
  app: {
    minHeight: '100vh',
  },
  flex: {
    display: 'flex',
  },
  box: {
    height: '100%',
  },
}));

export const BaseLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.app}>
      <Grid item xs={3} className={classes.flex}>
        <Nav />
      </Grid>
      <Grid item xs={9}>
        <Box display="flex" className={classes.box}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
