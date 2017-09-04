import actions from '.';
import types from '../constants/';

describe ('Actions', () => {
  const noteTitle = "My Note Title";
  const noteText = "Oh what a loveley note";

  it('Should create an action to add a todo', () => {
    const expectedAction = {
      type: types.SUBMIT_NOTE,
      id: 1,
      title: noteTitle,
      text: noteText
    };

    expect(actions.submitNote(noteTitle, noteText)).toEqual(expectedAction);
  });
});