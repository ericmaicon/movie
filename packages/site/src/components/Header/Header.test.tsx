import React from 'react';

import { render } from '~/test/index';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Header data-testid="header" />);

    const buttonElement = getByTestId('header');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });
});
