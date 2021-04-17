import React from 'react';
import { shallow } from 'enzyme';
import { ListPage } from '../../../src/features/examples/ListPage';

describe('examples/ListPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ListPage {...props} />
    );

    expect(
      renderedComponent.find('.examples-list-page').length
    ).toBe(1);
  });
});
