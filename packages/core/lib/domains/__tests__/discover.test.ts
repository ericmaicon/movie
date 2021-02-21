import { IMovieData } from '~/protocols';
import { GetMoviesParam, Movie } from '~/protocols/IMovieData';

import { MovieDomain } from '..';

const movie = {
  image: 'image',
  title: 'title',
  id: 1,
  description: 'description',
  rating: 1,
};

class MovieDataStub implements IMovieData {
  getDiscoveryMovies(): Promise<Movie[]> {
    return Promise.resolve([movie]);
  }

  // eslint-disable-next-line no-unused-vars
  getMovies(_params?: GetMoviesParam): Promise<Movie[]> {
    return Promise.resolve([movie]);
  }
}

function MovieDomainFactory() {
  const movieData = new MovieDataStub();
  const movieDomain = new MovieDomain(movieData);

  return {
    movieDomain,
    movieData,
  };
}

describe('Movie - discover', () => {
  test('should list movies', async () => {
    const { movieDomain } = MovieDomainFactory();
    const movies = await movieDomain.discover();

    expect(movies.length).toBe(1);
    expect(movies).toStrictEqual([movie]);
  });
});
