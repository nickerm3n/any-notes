import uuid from '../services/uuid';
import { BODY_PLACEHOLDER, HEADER_PLACEHOLDER } from './constants';

export const createNote = () => ({
  id: uuid(),
  header: HEADER_PLACEHOLDER,
  body: BODY_PLACEHOLDER,
});
