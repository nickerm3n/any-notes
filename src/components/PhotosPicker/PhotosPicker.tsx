import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Photo } from '../../reducers/photos/photosSlice';
import { PhotoCard } from './PhotoCard';

const useStyles = makeStyles(theme => ({
  picker: {
    padding: theme.spacing(2),
    border: '1px solid lightgrey',
  },
}));

type Props = {
  photos: Photo[];
  onClick: (background: Photo) => void;
};

export const PhotosPicker: React.FC<Props> = ({ photos, onClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.picker} display={'flex'} flexWrap={'wrap'}>
      {photos.map(photo => {
        return (
          <div onClick={() => onClick(photo)}>
            <PhotoCard photo={photo} />
          </div>
        );
      })}
    </Box>
  );
};
