import React from 'react';
import { shallow } from 'enzyme';
import NoteList from '.';

describe('NoteList component', () => {
  const notes = [
    {
      id: 1,
      text: 'A load of text',
      title: 'A lovely note'
    },
  ];

  const component = shallow(<NoteList notes={notes} />);

  it('Should render sucessfully', () => {
    expect(component.exists()).toEqual(true);
  })

  it('Should display a note when passed in as a prop', () => {
    expect(component.find('.note-title').text()).toEqual(notes[0].title);
    expect(component.find('.note-text').text()).toEqual(notes[0].text);
  });
});