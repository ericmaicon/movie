import { MovieData } from '~/datas';
import { IMovieData } from '~/protocols';

export default class MovieDomain {
  private readonly movieData: IMovieData;

  constructor(movieData: IMovieData = new MovieData()) {
    this.movieData = movieData;
  }

  /**
   * get list of movies
   */
  async getMovies() {
    const movies = await this.movieData.getMovies();

    return movies;
  }
}
