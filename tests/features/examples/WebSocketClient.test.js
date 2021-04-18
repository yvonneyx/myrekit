import React from 'react';
import { shallow } from 'enzyme';
import { WebSocketClient } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<WebSocketClient />);
  expect(renderedComponent.find('.examples-web-socket-client').length).toBe(1);
});
