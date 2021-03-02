import { getPhotosRequest, selectPhotos } from '../../reducers/photos/photosSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';

export const usePhotosPicker = () => {
  const dispatch = useAppDispatch();
  const photoState = useAppSelector(selectPhotos);
  const getPhotosAction = () => dispatch(getPhotosRequest());

  useEffect(() => {
    getPhotosAction();
  }, []);

  return photoState;
};
