import React from 'react';
import { act } from 'react-dom/test-utils';
import { FaSearch } from 'react-icons/fa';

import snapshotDiff from 'snapshot-diff';

import { fireEvent, render } from '~/test/index';

import Input from './Input';

const handleChange = () => jest.fn();

describe('Input', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Input value="input value" data-testid="input" onChange={handleChange} />,
    );

    const inputElement = getByTestId('input');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('input value');
    expect(inputElement).toBeEnabled();
    expect(inputElement).toMatchSnapshot();
  });

  it('should be disabled', () => {
    const { rerender, asFragment, getByTestId } = render(
      <Input value="input value" data-testid="input" onChange={handleChange} />,
    );

    const enabled = asFragment();
    rerender(
      <Input
        disabled
        value="input value"
        data-testid="input"
        onChange={handleChange}
      />,
    );
    const disabled = asFragment();

    expect(getByTestId('input')).toBeDisabled();
    expect(disabled).toMatchSnapshot();
    expect(snapshotDiff(enabled, disabled)).toMatchSnapshot();
  });

  it('should be invalid', () => {
    const { rerender, asFragment } = render(
      <Input value="input value" data-testid="input" onChange={handleChange} />,
    );

    const valid = asFragment();
    rerender(
      <Input
        valid={false}
        value="input value"
        data-testid="input"
        onChange={handleChange}
      />,
    );
    const invalid = asFragment();

    expect(invalid).toMatchSnapshot();
    expect(snapshotDiff(valid, invalid)).toMatchSnapshot();
  });

  it('should render a left icon', () => {
    const { getAllByTestId } = render(
      <Input
        startIcon={<FaSearch data-testid="search-icon" />}
        value="input value"
        onChange={handleChange}
      />,
    );

    const [inputElement] = getAllByTestId('search-icon');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
  });

  it('can have onFocus', () => {
    const handleFocus = jest.fn();

    const { getByTestId } = render(
      <Input
        value="input value"
        data-testid="input"
        onChange={handleChange}
        onFocus={handleFocus}
      />,
    );

    const textFieldElement = getByTestId('input');

    expect(textFieldElement).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(document.body, { key: 'TAB' });
      textFieldElement.focus();
    });

    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(textFieldElement).toHaveFocus();
    expect(textFieldElement).toMatchSnapshot();
  });

  it('can have onBlur', () => {
    const handleBlur = jest.fn();

    const { getByTestId } = render(
      <Input
        value="input value"
        data-testid="input"
        onChange={handleChange}
        onBlur={handleBlur}
      />,
    );

    const textFieldElement = getByTestId('input');

    expect(textFieldElement).toBeInTheDocument();

    act(() => {
      fireEvent.blur(textFieldElement);
      textFieldElement.blur();
    });

    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(textFieldElement).not.toHaveFocus();
    expect(textFieldElement).toMatchSnapshot();
  });
});
