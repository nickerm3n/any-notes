import React from 'react';
import { Search } from './Search';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSearch, setSearchValue } from '../../reducers/search/searchSlice';

export const SearchContainer: React.FC = () => {
  const { value } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  return <Search onChange={handleChange} value={value} />;
};
