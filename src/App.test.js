import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/';

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App 
      state={initialState}
      submitNote={mockFunction}  
    />
  );

  expect(component.exists()).toEqual(true);
});
