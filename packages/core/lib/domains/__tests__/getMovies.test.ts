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
  // eslint-disable-next-line no-unused-vars
  getMovieById(_id: string | number): Promise<Movie> {
    return Promise.resolve(movie);
  }

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

describe('Movie - getMovies', () => {
  test('should list movies', async () => {
    const { movieDomain } = MovieDomainFactory();
    const movies = await movieDomain.getMovies('query');

    expect(movies.length).toBe(1);
    expect(movies).toStrictEqual([movie]);
  });
});
