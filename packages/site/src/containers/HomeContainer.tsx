import React from 'react';

import { MovieDomain, useAsync } from '@movie/core';

import { Home, Item } from '~/pages/Home/Home';

export function HomeContainer() {
  const movieDomain = new MovieDomain();
  const { value } = useAsync(() => movieDomain.getMovies());

  // eslint-disable-next-line no-empty-function
  async function handleFilter() {}

  return <Home onFilter={handleFilter} items={value as Item[]} />;
}

export default HomeContainer;
