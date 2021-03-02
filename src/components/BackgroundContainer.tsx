import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/user/userSlice';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    height: '100%',
    backgroundSize: 'cover',
  },
}));

export const BackgroundContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  const { user } = useSelector(selectUser);
  const background = user.background.urls.full ? user.background.urls.full : '';

  return (
    <div
      className={classes.container}
      style={{ background: `url(${background})`, backgroundSize: 'cover' }}
    >
      {children}
    </div>
  );
};
