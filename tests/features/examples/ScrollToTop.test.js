import React from 'react';
import { shallow } from 'enzyme';
import { ScrollToTop } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ScrollToTop />);
  expect(renderedComponent.find('.examples-scroll-to-top').length).toBe(1);
});
