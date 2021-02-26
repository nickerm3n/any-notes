import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4),
    position: 'relative',
  },
  header: {
    marginBottom: theme.spacing(2),
    width: '80%',
    '& span': {
      fontWeight: 600,
      color: '#a9a9a9',
      paddingRight: theme.spacing(2),
    },
    '& input': {
      fontSize: 24,
      fontWeight: 600,
      background: 'transparent',
      width: '100%',
    },
  },
  textarea: {
    width: '80%',
    border: 'none',
    background: 'transparent',
  },
  toolsWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
