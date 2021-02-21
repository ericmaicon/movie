import React from 'react';

import snapshotDiff from 'snapshot-diff';

import { render } from '~/test/index';

import { Detail } from './Detail';

const item = {
  id: 1,
  image:
    'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
  title:
    'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
  description: '',
  rating: 1,
};

describe('Detail', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Detail data-testid="detail" item={item} />);

    const detailElement = getByTestId('detail');

    expect(detailElement).toBeInTheDocument();
    expect(detailElement).toMatchSnapshot();
  });

  it('should render loading when there is no item', () => {
    const { rerender, asFragment } = render(
      <Detail data-testid="detail" item={null} />,
    );

    const loading = asFragment();
    rerender(<Detail data-testid="detail" item={item} />);
    const withItem = asFragment();

    expect(withItem).toMatchSnapshot();
    expect(snapshotDiff(loading, withItem)).toMatchSnapshot();
  });
});
