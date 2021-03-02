import React from 'react';
import { Photo } from '../../reducers/photos/photosSlice';
import { makeStyles } from '@material-ui/core';

const SIZE = 85;

const useStyles = makeStyles(theme => ({
  box: {
    width: SIZE,
    height: SIZE,
    cursor: 'pointer',
    borderRadius: 3,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      border: '2px solid transparent',
      '&.active': {
        border: '2px solid #3f51b5',
      },
      '&:hover': {
        border: '2px solid #3f51b5',
      },
    },
  },
}));

type Props = {
  photo: Photo;
  isActive?: boolean;
};

export const PhotoCard: React.FC<Props> = ({ photo, isActive }) => {
  const classes = useStyles();
  return (
    <div className={classes.box} key={photo.id}>
      <img
        src={photo.urls.small}
        alt={photo.urls.small}
        className={`${isActive ? 'active' : ''}`}
      />
    </div>
  );
};
