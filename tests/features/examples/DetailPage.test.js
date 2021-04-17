import React from 'react';
import { shallow } from 'enzyme';
import { DetailPage } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<DetailPage />);
  expect(renderedComponent.find('.examples-detail-page').length).toBe(1);
});
