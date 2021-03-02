import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
    border: '1px solid #cdcdce',
    borderRadius: 4,
    overflow: 'hidden',
  },
  icon: {
    position: 'absolute',
    left: theme.spacing(1),
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#adaeae',
    width: '0.8em',
    height: '0.8em',
  },
  input: {
    padding: `${theme.spacing(1) / 1.5}px ${theme.spacing(4)}px`,
    width: '100%',
    '&::placeholder': {
      color: '#adaeae',
    },
  },
}));

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Search: React.FC<Props> = ({ onChange, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SearchIcon className={classes.icon} />
      <input
        type="text"
        className={classes.input}
        placeholder={'Search Notes'}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
