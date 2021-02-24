import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import NotesIcon from '@material-ui/icons/Notes';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  nav: {
    background: '#272b2d',
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  link: {
    color: theme.palette.background.paper,
    textDecoration: 'none',
    display: 'flex',
    padding: theme.spacing(1),
    '&:hover, &.active': {
      background: '#4c4c4c',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export const Nav: React.FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Box display="flex" justifyContent={'flex-end'}>
        <NavLink to={'/settings'} className={classes.link} activeClassName="active">
          <TuneIcon />
        </NavLink>
      </Box>
      <ul>
        <li>
          <NavLink to="/" exact className={classes.link} activeClassName="active">
            <Box display={'flex'} alignItems={'center'}>
              <NotesIcon className={classes.icon} /> Notes
            </Box>
          </NavLink>
        </li>
        <li>
          <NavLink to="/archive" className={classes.link} activeClassName="active">
            <Box display={'flex'} alignItems={'center'}>
              <ArchiveIcon className={classes.icon} /> Archive
            </Box>
          </NavLink>
        </li>
        <li>
          <NavLink to="/trash" className={classes.link} activeClassName="active">
            <Box display={'flex'} alignItems={'center'}>
              <DeleteIcon className={classes.icon} /> Trash
            </Box>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
