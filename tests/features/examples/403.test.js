import React from 'react';
import { shallow } from 'enzyme';
import { 403 } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<403 />);
  expect(renderedComponent.find('.examples-403').length).toBe(1);
});
