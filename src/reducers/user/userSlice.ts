import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Photo } from '../photos/photosSlice';
import { BACKGROUND_PLACEHOLDER } from '../../utils/constants';

export type User = {
  username: string;
  background: Photo;
};

export type UserState = {
  user: User;
};

const initialState: UserState = {
  user: {
    username: 'User',
    background: {
      id: 'placeholder',
      urls: {
        raw: BACKGROUND_PLACEHOLDER,
        full: BACKGROUND_PLACEHOLDER,
        regular: BACKGROUND_PLACEHOLDER,
        small: BACKGROUND_PLACEHOLDER,
        thumb: BACKGROUND_PLACEHOLDER,
      },
    },
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const selectUser = (state: RootState): UserState => state.user;

export default userSlice.reducer;
