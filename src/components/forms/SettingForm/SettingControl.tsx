import React from 'react';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';

type Props = {
  value: string;
  onChange: (event: any) => void;
  isError: boolean;
};

export const SettingControl: React.FC<Props> = ({ value, onChange, isError }) => {
  return (
    <FormControl error={isError}>
      <InputLabel htmlFor="component-input">Username</InputLabel>
      <Input
        id="component-input"
        aria-describedby="component-input-text"
        value={value}
        onChange={onChange}
      />
      {isError && (
        <FormHelperText id="component-input-text">
          The username must contain at least one symbol
        </FormHelperText>
      )}
    </FormControl>
  );
};
