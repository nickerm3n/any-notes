import React, { useEffect, useRef } from 'react';
import { Box, TextareaAutosize } from '@material-ui/core';
import { Tools } from '../Tools';
import { useStyles } from './NoteCardStyles';
import {Note, NoteChangePayload, NotesState} from '../../reducers/notes/notesSlice';
import {checkBodyPlaceholder, checkHeaderPlaceholder, checkEmptyNote, checkPlaceholder} from "../../utils";

type Props = {
  note: NotesState['selectedNote'];
  noteChange: (payload: NoteChangePayload) => void;
  removeNote: (payload: Note) => void;
};

export const NoteCard: React.FC<Props> = ({ note , noteChange, removeNote}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const classes = useStyles();

  useEffect(() => {
    if (inputRef.current && checkPlaceholder(note)) {
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
          noteId: note.id,
          name: name as keyof Note,
          value
      })
  }

  if (checkEmptyNote(note)) return null;

    return (
    <div className={classes.card}>
      <Box className={classes.header} display={'flex'} alignItems={'flex-end'}>
        <span>H1</span>
        <input ref={inputRef} name="header" value={checkHeaderPlaceholder(note)} onKeyUp={handleKeyUp} onChange={handleChange}/>
      </Box>
      <TextareaAutosize className={classes.textarea} ref={textareaRef} name="body" value={checkBodyPlaceholder(note)} onChange={handleChange}/>
      <div className={classes.toolsWrapper}>
        <Tools note={note} removeNote={removeNote}/>
      </div>
    </div>
  );
};
