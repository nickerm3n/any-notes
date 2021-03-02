import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectUser } from '../../../reducers/user/userSlice';

export const useSettingForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  return user;
};
