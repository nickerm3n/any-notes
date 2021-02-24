import React, { useEffect, useRef } from 'react';
import { Box, TextareaAutosize } from '@material-ui/core';
import { Tools } from '../Tools';
import { useStyles } from './NoteCardStyles';
import {NoteChangePayload, NotesState} from '../../reducers/notes/notesSlice';

type Props = {
  note: NotesState['selectedNote'];
  noteChange: (payload: NoteChangePayload) => void;
};

export const NoteCard: React.FC<Props> = ({ note , noteChange}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const classes = useStyles();

  useEffect(() => {
    if (inputRef && inputRef.current) {
        // eslint-disable-next-line prettier/prettier
        inputRef?.current?.focus()
    }
  }, [note]);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && textareaRef.current) {
          // eslint-disable-next-line prettier/prettier
          textareaRef?.current?.focus()
      }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = event.target
      noteChange({
          noteId: note!.id,
          name,
          value
      })
  }

  if (!note) return null;

    return (
    <div className={classes.card}>
      <Box className={classes.header} display={'flex'} alignItems={'flex-end'}>
        <span>H1</span>
        <input ref={inputRef} name="header" value={note.header} onKeyUp={handleKeyUp} onChange={handleChange}/>
      </Box>
      {/*<TextareaAutosize className={classes.textarea} ref={textareaRef} name="body" onChange={handleChange}/>*/}
      <div className={classes.toolsWrapper}>
        <Tools />
      </div>
    </div>
  );
};
