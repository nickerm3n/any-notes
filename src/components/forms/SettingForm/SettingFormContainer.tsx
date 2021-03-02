import React, { useState } from 'react';
import { SettingForm } from './SettingForm';
import { SettingControl } from './SettingControl';
import { Box, Button } from '@material-ui/core';
import { PhotosPickerContainer } from '../../PhotosPicker/PhotosPickerContainer';
import { validateValue } from '../../../utils';
import { Photo } from '../../../reducers/photos/photosSlice';
import { useSettingForm } from './SettingFormHooks';
import { PhotoCard } from '../../PhotosPicker/PhotoCard';
import { useAppDispatch } from '../../../hooks';
import { updateUser } from '../../../reducers/user/userSlice';

export const SettingFormContainer: React.FC = () => {
  const { user } = useSettingForm();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState(user.username);
  const [background, setBackground] = useState(user.background);

  const handleUsernameChange = (event: any) => setUsername(event.target.value);

  const handleBackgroundChange = (backgroundURL: Photo) => setBackground(backgroundURL);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      updateUser({
        username,
        background,
      }),
    );
  };

  const isValid = validateValue(username);

  return (
    <SettingForm onSubmit={handleSubmit}>
      <Box mb={2}>
        <SettingControl value={username} onChange={handleUsernameChange} isError={isValid} />
      </Box>
      <Box mb={2}>
        Current background:
        <Box mb={2}>
          <PhotoCard photo={background} isActive />
        </Box>
        <PhotosPickerContainer onClick={handleBackgroundChange} />
      </Box>
      <div>
        <Button variant="contained" color="primary" type={'submit'} disabled={isValid}>
          Save
        </Button>
      </div>
    </SettingForm>
  );
};
