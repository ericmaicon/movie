import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { MovieDomain, Movie, useAsync } from '@movie/core';
import { FormikValues } from 'formik';

import { Search } from '~/pages/Search/Search';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function SearchContainer() {
  const movieDomain = new MovieDomain();
  const query = useQuery();
  const history = useHistory();
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const { value } = useAsync<Movie[]>(() =>
    movieDomain.getMovies(query.get('search')!),
  );

  useEffect(() => {
    setMovies(value);
  }, [value]);

  async function handleFilter({ search }: FormikValues) {
    if (search) {
      history.push(`/search?search=${search}`);
    } else {
      history.push(`/`);
    }
  }

  async function handleSelectItem(id: number | string) {}

  async function handleFilterRating({ rating }: FormikValues) {
    if (value) {
      const ratedMovies = value.filter((movie) => movie.rating >= rating);
      setMovies(ratedMovies);
    }
  }

  return (
    <Search
      onFilter={handleFilter}
      onSelectItem={handleSelectItem}
      onFilterRating={handleFilterRating}
      items={movies}
    />
  );
}

export default SearchContainer;
