import types from '../constants/';

let noteId = 0;

const nextId = () => {
  noteId += 1;
  return noteId;
}

const actions = {
  submitNote(title, text) {
    return {
      type: types.SUBMIT_NOTE,
      id: nextId(),
      title,
      text
    };
  },
};

export default actions;