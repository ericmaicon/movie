import React from 'react';

import { render } from '~/test/index';

import Text from './Text';

describe('Text', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Text>Text</Text>);

    const textElement = getByText('Text');

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(/^Text$/);
    expect(textElement).toMatchSnapshot();
  });
});
