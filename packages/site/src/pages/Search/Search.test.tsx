import React from 'react';

import snapshotDiff from 'snapshot-diff';

import { fireEvent, render, waitFor } from '~/test/index';

import { Search } from './Search';

const items = [
  {
    id: 1,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 2,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 3,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 4,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 5,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 6,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 7,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 8,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
  {
    id: 9,
    image:
      'https://www.themoviedb.org/t/p/w220_and_h330_face/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg',
    title:
      'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
    description: '',
    rating: 1,
  },
];

describe('Search', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Search
        onSelectItem={jest.fn()}
        onFilterRating={jest.fn()}
        data-testid="search"
        items={items}
      />,
    );

    const searchElement = getByTestId('search');

    expect(searchElement).toBeInTheDocument();
    expect(searchElement).toMatchSnapshot();
  });

  it('should render loading when there is no items', () => {
    const { rerender, asFragment } = render(
      <Search
        onSelectItem={jest.fn()}
        onFilterRating={jest.fn()}
        data-testid="search"
        items={null}
      />,
    );

    const loading = asFragment();
    rerender(
      <Search
        onSelectItem={jest.fn()}
        onFilterRating={jest.fn()}
        data-testid="search"
        items={items}
      />,
    );
    const withItems = asFragment();

    expect(withItems).toMatchSnapshot();
    expect(snapshotDiff(loading, withItems)).toMatchSnapshot();
  });

  it('should call onSelectItem after click in an item', async () => {
    const onSelectItem = jest.fn();
    const { getAllByRole } = render(
      <Search
        onFilterRating={jest.fn()}
        onSelectItem={onSelectItem}
        items={items}
      />,
    );

    const [itemElement] = getAllByRole('img');

    fireEvent.click(itemElement);
    expect(onSelectItem).toHaveBeenCalledWith(1);
  });

  it('should filter items by rating', async () => {
    const onFilterRating = jest.fn();
    const { getAllByTitle } = render(
      <Search
        onFilterRating={onFilterRating}
        onSelectItem={jest.fn()}
        items={items}
      />,
    );

    const [starElement] = getAllByTitle('star');

    fireEvent.click(starElement);
    await waitFor(() =>
      expect(onFilterRating).toHaveBeenCalledWith({
        rating: 2,
      }),
    );

    fireEvent.click(starElement);
    await waitFor(() =>
      expect(onFilterRating).toHaveBeenCalledWith({
        rating: 2,
      }),
    );
  });
});
