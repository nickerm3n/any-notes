import React from 'react';
import { PhotosPicker } from './PhotosPicker';
import { usePhotosPicker } from './PhotosPickerHooks';
import { CircularProgress } from '@material-ui/core';
import { Photo } from '../../reducers/photos/photosSlice';

type Props = {
  onClick: (background: Photo) => void;
};

export const PhotosPickerContainer: React.FC<Props> = ({ onClick }) => {
  const { photos, loading, error } = usePhotosPicker();

  if (loading) return <CircularProgress />;
  if (error) return <div>Error</div>;

  return <PhotosPicker photos={photos} onClick={onClick} />;
};
