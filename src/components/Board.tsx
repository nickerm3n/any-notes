import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  board: {
    flexGrow: 1,
    borderRight: '1px solid #dedede',
    height: '100%',
  },
  container: {
    height: '100%',
  },
  leftCol: {
    borderRight: '1px solid #dedede',
    background: 'rgba(255, 255, 255, 0.9)',
  },
  rightCol: {
    background: 'rgba(255, 255, 255, 0.8)',
  },
}));

type Props = {
  leftComp: React.ComponentType;
  rightComp: React.ComponentType;
};

export const Board: React.FC<Props> = ({ leftComp: LeftComponent, rightComp: RightComponent }) => {
  const classes = useStyles();

  return (
    <div className={classes.board}>
      <Grid container className={classes.container}>
        <Grid item xs={5} className={classes.leftCol}>
          <LeftComponent />
        </Grid>
        <Grid item xs={7} className={classes.rightCol}>
          <RightComponent />
        </Grid>
      </Grid>
    </div>
  );
};
