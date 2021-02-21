import React from 'react';
import { useHistory } from 'react-router-dom';

import { MovieDomain, Movie, useAsync } from '@movie/core';
import { FormikValues } from 'formik';

import { Home } from '~/pages/Home/Home';

export function HomeContainer() {
  const movieDomain = new MovieDomain();
  const history = useHistory();
  const { value } = useAsync<Movie[]>(() => movieDomain.discover());

  async function handleFilter({ search }: FormikValues) {
    if (search) {
      history.push(`/search?search=${search}`);
    } else {
      history.push(`/`);
    }
  }

  return <Home onFilter={handleFilter} items={value} />;
}

export default HomeContainer;
