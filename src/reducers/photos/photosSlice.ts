import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import PhotoAPI from '../../services/photoAPI';

export type Photo = {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

export type PhotoState = {
  photos: Photo[];
  loading: boolean;
  error: null | Error;
};

const initialState: PhotoState = {
  photos: [],
  loading: false,
  error: null,
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    requestPhotos: state => {
      state.photos = [];
      state.loading = true;
      state.error = null;
    },
    requestPhotosSuccess: (state, action: PayloadAction<Photo[]>) => {
      state.loading = false;
      state.photos = action.payload;
    },
    requestPhotosFailure: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { requestPhotos, requestPhotosSuccess, requestPhotosFailure } = photoSlice.actions;

export const getPhotosRequest = () => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(requestPhotos());
  try {
    const photos = await PhotoAPI.getPhotos();
    dispatch(requestPhotosSuccess(photos));
  } catch (error) {
    dispatch(requestPhotosFailure(error));
  }
};

// Other code such as selectors can use the imported `RootState` type
export const selectPhotos = (state: RootState): PhotoState => state.photo;

export default photoSlice.reducer;
