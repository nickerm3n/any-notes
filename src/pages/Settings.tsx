import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SettingFormContainer } from '../components/forms/SettingForm/SettingFormContainer';

const useStyles = makeStyles(theme => ({
  setting: {
    background: theme.palette.background.paper,
    flexGrow: 1,
    borderRight: '1px solid #dedede',
  },
  header: {
    fontSize: 24,
    fontWeight: 600,
  },
}));

export const Settings: React.FC = () => {
  const classes = useStyles();
  return (
    <Box p={4} className={classes.setting}>
      <Box mb={4}>
        <h2 className={classes.header}>Setting Page</h2>
      </Box>
      <SettingFormContainer />
    </Box>
  );
};
