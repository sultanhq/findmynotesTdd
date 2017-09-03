import React from 'react';
import { shallow } from 'enzyme';
import AddNote from '.';

describe('AddNote component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddNote />);
    expect(component.exists()).toEqual(true);
  });
});