import React from 'react';
import { shallow } from 'enzyme';
import { Chat } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Chat />);
  expect(renderedComponent.find('.examples-chat').length).toBe(1);
});
