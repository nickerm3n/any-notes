import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles, Popover } from '@material-ui/core';
import { ColorPalette } from './ColorPalatte';
import { Note, NoteColorPayload } from '../reducers/notes/notesSlice';

const useStyles = makeStyles(() => ({
  settings: {
    position: 'absolute',
    right: 5,
    top: 5,
    '& svg': {
      color: '#adaeae',
    },
  },
}));

type Props = {
  note: Note;
  selectNoteColor: (payload: NoteColorPayload) => void;
};

export const SettingPopover: React.FC<Props> = props => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.settings}>
      <button aria-describedby={id} onClick={handleClick}>
        <SettingsIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ColorPalette {...props} closePalette={handleClose} />
      </Popover>
    </div>
  );
};
