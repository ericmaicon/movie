import React from 'react';

import { render } from '~/test/index';

import VideoCard from './VideoCard';

describe('VideoCard', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <VideoCard
        data-testid="video-card"
        src="https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg"
      />,
    );

    const textElement = getByTestId('video-card');

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveAttribute('src');
    expect(textElement).toMatchSnapshot();
  });

  it('should render error image', () => {
    const { getByTestId } = render(<VideoCard data-testid="video-card" />);

    const textElement = getByTestId('video-card');

    expect(textElement).toMatchSnapshot();
  });

  it('should render error image', () => {
    const { getByTestId } = render(
      <VideoCard data-testid="video-card" src="some invalid url" />,
    );

    const textElement = getByTestId('video-card');

    expect(textElement).toMatchSnapshot();
  });
});
