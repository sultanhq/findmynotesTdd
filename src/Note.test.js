import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

it('Note renders without crashing', () => {
  const component = shallow(<Note />);
  expect(component.exists()).toEqual(true);
});

it('')
