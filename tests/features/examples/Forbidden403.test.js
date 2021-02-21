import React from 'react';
import { shallow } from 'enzyme';
import { Forbidden403 } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Forbidden403 />);
  expect(renderedComponent.find('.examples-forbidden-403').length).toBe(1);
});
