import React from 'react';

import { render } from '~/test/index';

import Footer from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Footer data-testid="footer" />);

    const footerElement = getByTestId('footer');

    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toMatchSnapshot();
  });
});
