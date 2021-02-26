import React from 'react';
import { COLORS_PALETTE } from '../utils/constants';
import { makeStyles } from '@material-ui/core';
import { Note, NoteColorPayload } from '../reducers/notes/notesSlice';

const SIZE = 20;

const useStyles = makeStyles(theme => ({
  palette: {
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    width: 104,
  },
  item: {
    width: SIZE,
    height: SIZE,
    margin: 2,
    cursor: 'pointer',
  },
}));

type Props = {
  note: Note;
  selectNoteColor: (payload: NoteColorPayload) => void;
  closePalette: () => void;
};

export const ColorPalette: React.FC<Props> = ({ note, selectNoteColor, closePalette }) => {
  const classes = useStyles();

  return (
    <ul className={classes.palette}>
      {COLORS_PALETTE.map(color => {
        return (
          <li key={color}>
            <button
              className={classes.item}
              style={{ background: color }}
              onClick={() => {
                selectNoteColor({ noteId: note.id, color });
                closePalette();
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};
