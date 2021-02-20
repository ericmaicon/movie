import React from 'react';

import { render } from '~/test/index';

import VideoGallery from './VideoGallery';

const items = [
  {
    id: 1,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 2,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 3,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 4,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 5,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 6,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 7,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 8,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
  {
    id: 9,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    link: '',
  },
];

describe('VideoGallery', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <VideoGallery data-testid="video-galery" items={items} />,
    );

    const videoGalleryElement = getByTestId('video-galery');

    expect(videoGalleryElement).toBeInTheDocument();
    expect(videoGalleryElement.childElementCount).toBe(9);
    expect(videoGalleryElement).toMatchSnapshot();
  });
});
