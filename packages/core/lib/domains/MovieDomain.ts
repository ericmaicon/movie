import { MovieData } from '~/datas';
import { IMovieData } from '~/protocols';

export default class MovieDomain {
  private readonly movieData: IMovieData;

  constructor(movieData: IMovieData = new MovieData()) {
    this.movieData = movieData;
  }

  /**
   * get list of discovery movies
   */
  async discover() {
    const movies = await this.movieData.getDiscoveryMovies();

    return movies;
  }

  /**
   * get list of movies by search
   */
  async getMovies(search: string) {
    const movies = await this.movieData.getMovies({
      search,
    });

    return movies;
  }
}
