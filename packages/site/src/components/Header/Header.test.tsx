import React from 'react';

import userEvent from '@testing-library/user-event';

import { fireEvent, render, waitFor } from '~/test/index';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Header onFilter={jest.fn()} data-testid="header" />,
    );

    const headerElement = getByTestId('header');

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toMatchSnapshot();
  });

  it('should call onFilter after submit form', async () => {
    const onFilter = jest.fn();
    const { getByRole, getByTestId } = render(<Header onFilter={onFilter} />);

    const searchInput = getByRole('textbox');
    const formElement = getByTestId('form');

    userEvent.type(searchInput, 'Search');
    fireEvent.submit(formElement);
    await waitFor(() =>
      expect(onFilter).toHaveBeenCalledWith({
        search: 'Search',
      }),
    );
  });
});
