import types from '../constants/';
import {reducer, initialState } from '.';

describe('Reducer', () => {
  const noteTitle = "My Note Title";
  const noteText = "Oh what a loveley note";

  it('Should retuen the initial state when no action passed',  () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  describe('Submit Note', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_NOTE,
        id: 1,
        title: noteTitle,
        text: noteText
      };

      const expectedState ={
        notes: [
          {
            id: 1,
            title: noteTitle,
            text: noteText
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});