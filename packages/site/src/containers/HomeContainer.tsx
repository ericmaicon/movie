import React from 'react';
import { useHistory } from 'react-router-dom';

import { MovieDomain, Movie, useAsync } from '@movie/core';

import { Home } from '~/pages/Home/Home';

export function HomeContainer() {
  const movieDomain = new MovieDomain();
  const history = useHistory();
  const { value } = useAsync<Movie[]>(() => movieDomain.discover());

  async function handleSelectItem(id: number | string) {
    history.push(`/detail?id=${id}`);
  }

  return <Home onSelectItem={handleSelectItem} items={value} />;
}

export default HomeContainer;
