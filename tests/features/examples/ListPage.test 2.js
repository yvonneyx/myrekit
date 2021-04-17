import React from 'react';
import { shallow } from 'enzyme';
import { ListPage } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ListPage />);
  expect(renderedComponent.find('.examples-list-page').length).toBe(1);
});
