import React from 'react';

import Heading from '~/Heading';
import { render } from '~/test/utils';

describe('Heading', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Heading>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/^Heading$/);

    expect(headingElement).toMatchSnapshot();
  });
});
