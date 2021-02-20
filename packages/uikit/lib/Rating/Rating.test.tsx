import React from 'react';

import { fireEvent, render } from '~/test/index';

import Rating from './Rating';

describe('Rating', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Rating data-testid="rating" value={3} />);

    const ratingElement = getByTestId('rating');

    expect(ratingElement).toBeInTheDocument();
    expect(ratingElement.childElementCount).toBe(5);
    expect(ratingElement).toMatchSnapshot();
  });

  it('should render empty stars', () => {
    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={0} />,
    );

    const starElements = getAllByTestId('star');

    expect(starElements.length).toBe(5);
  });

  it('should render 1 filled star', () => {
    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={2} />,
    );

    const starElements = getAllByTestId('star');

    expect(starElements.length).toBe(4);
  });

  it('should render 2 filled stars', () => {
    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={3} />,
    );

    const starElements = getAllByTestId('star');

    expect(starElements.length).toBe(3);
  });

  it('should render 3 filled stars', () => {
    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={5} />,
    );

    const starElements = getAllByTestId('star');

    expect(starElements.length).toBe(2);
  });

  it('should render 4 filled stars', () => {
    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={7} />,
    );

    const starElements = getAllByTestId('star');

    expect(starElements.length).toBe(1);
  });

  it('should render 5 filled stars', () => {
    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={10} />,
    );

    const starElements = getAllByTestId('filled-star');

    expect(starElements.length).toBe(5);
  });

  it('should call onChange when click on a filled star', () => {
    const handleChange = jest.fn();

    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={10} onChange={handleChange} />,
    );

    const [firstElement, secondElement, thirdElement] = getAllByTestId(
      'filled-star',
    );

    expect(firstElement).toBeInTheDocument();

    fireEvent.click(firstElement);
    expect(handleChange).toHaveBeenCalledWith(2);

    fireEvent.click(secondElement);
    expect(handleChange).toHaveBeenCalledWith(4);

    fireEvent.click(thirdElement);
    expect(handleChange).toHaveBeenCalledWith(6);
  });

  it('should call onChange when click on an empty star', () => {
    const handleChange = jest.fn();

    const { getAllByTestId } = render(
      <Rating data-testid="rating" value={0} onChange={handleChange} />,
    );

    const [firstElement, secondElement, thirdElement] = getAllByTestId('star');

    expect(firstElement).toBeInTheDocument();

    fireEvent.click(firstElement);
    expect(handleChange).toHaveBeenCalledWith(2);

    fireEvent.click(secondElement);
    expect(handleChange).toHaveBeenCalledWith(4);

    fireEvent.click(thirdElement);
    expect(handleChange).toHaveBeenCalledWith(6);
  });
});
