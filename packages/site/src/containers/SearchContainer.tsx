import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MovieDomain, Movie, useAsync } from '@movie/core';
import { FormikValues } from 'formik';

import { useQuery } from '~/hooks';
import { Search } from '~/pages/Search/Search';

export function SearchContainer() {
  const movieDomain = new MovieDomain();
  const query = useQuery();
  const history = useHistory();
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const { value, execute } = useAsync<Movie[]>(
    (search: string) => movieDomain.getMovies(search),
    false,
  );

  useEffect(() => {
    execute(query.get('search'));
  }, [query.get('search')]);

  useEffect(() => {
    setMovies(value);
  }, [value]);

  async function handleSelectItem(id: number | string) {
    history.push(`/detail?id=${id}`);
  }

  async function handleFilterRating({ rating }: FormikValues) {
    if (rating === 0) {
      setMovies(value);
    } else if (value) {
      const ratedMovies = value.filter(
        (movie: Movie) => movie.rating >= rating,
      );
      setMovies(ratedMovies);
    }
  }

  return (
    <Search
      onSelectItem={handleSelectItem}
      onFilterRating={handleFilterRating}
      items={movies}
    />
  );
}

export default SearchContainer;
