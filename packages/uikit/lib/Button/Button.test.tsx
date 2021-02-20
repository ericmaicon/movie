import React from 'react';

import { render } from '~/test/index';

import Button from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/^Button$/);
    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a primary button', () => {
    const { getByRole } = render(<Button variant="primary">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    const { getByRole } = render(<Button variant="secondary">Button</Button>);

    const buttonElement = getByRole('button');

    expect(getByRole('button')).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });
});
