import React, { useEffect } from 'react';

import { MovieDomain, Movie, useAsync } from '@movie/core';

import { useQuery } from '~/hooks';
import { Detail } from '~/pages/Detail/Detail';

export function DetailContainer() {
  const movieDomain = new MovieDomain();
  const query = useQuery();

  const { value, execute } = useAsync<Movie>(
    (id: number | string) => movieDomain.getMovieDetail(id),
    false,
  );

  useEffect(() => {
    execute(query.get('id'));
  }, [query.get('id')]);

  return <Detail item={value} />;
}

export default DetailContainer;
