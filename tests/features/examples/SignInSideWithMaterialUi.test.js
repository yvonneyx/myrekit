import React from 'react';
import { shallow } from 'enzyme';
import { SignInSideWithMaterialUi } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SignInSideWithMaterialUi />);
  expect(renderedComponent.find('.examples-table-with-material-ui').length).toBe(1);
});
