import React from 'react';

import { fireEvent, render } from '~/test/index';

import VideoList from './VideoList';

const items = [
  {
    id: 1,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
    title: 'When the crew',
    description:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    rating: 10,
  },
  {
    id: 2,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
    title: 'When the crew',
    description:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    rating: 2,
  },
];

describe('VideoList', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <VideoList
        data-testid="video-galery"
        items={items}
        onSelectItem={jest.fn()}
      />,
    );

    const videoListElement = getByTestId('video-galery');

    expect(videoListElement).toBeInTheDocument();
    expect(videoListElement.childElementCount).toBe(2);
    expect(videoListElement).toMatchSnapshot();
  });

  it('should call onSelectItem when click on the image', () => {
    const handleSelectItem = jest.fn();
    const { getAllByTestId } = render(
      <VideoList items={items} onSelectItem={handleSelectItem} />,
    );

    const [imageElement] = getAllByTestId('image');

    fireEvent.click(imageElement);

    expect(handleSelectItem).toBeCalledWith(1);
  });

  it('should call onSelectItem when click on the title', () => {
    const handleSelectItem = jest.fn();
    const { getAllByTestId } = render(
      <VideoList items={items} onSelectItem={handleSelectItem} />,
    );

    const [headerElement] = getAllByTestId('header');

    fireEvent.click(headerElement);

    expect(handleSelectItem).toBeCalledWith(1);
  });

  it('should call onSelectItem when click on the button', () => {
    const handleSelectItem = jest.fn();
    const { getAllByRole } = render(
      <VideoList items={items} onSelectItem={handleSelectItem} />,
    );

    const [buttonElement] = getAllByRole('button');

    fireEvent.click(buttonElement);

    expect(handleSelectItem).toBeCalledWith(1);
  });
});
