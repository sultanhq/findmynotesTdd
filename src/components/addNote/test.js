import React from 'react';
import { shallow, mount } from 'enzyme';
import AddNote from '.';

describe('AddNote component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddNote 
        submitNote={submitMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have two inputs', () => {
    expect(component.find('.note-Input').length).toEqual(2);
  });

  describe('Add note button', () => {
    it('Should exist', () => {
      expect(component.find('.note-submit').length).toEqual(1);
    });

    it('Should call the submitNote function when clicked', ()=> {
      const component = mount(<AddNote submitNote={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});