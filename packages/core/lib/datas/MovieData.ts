import { IInfra, IMovieData } from '~/protocols';
import { GetMoviesParam, Movie } from '~/protocols/IMovieData';
import { Infra } from '~/vendors';

export default class MovieData implements IMovieData {
  private readonly infra: IInfra;

  constructor(infra: IInfra = new Infra()) {
    this.infra = infra;
  }

  /**
   * get movies
   *
   * @param params
   */
  // eslint-disable-next-line no-unused-vars
  async getMovies(_params?: GetMoviesParam): Promise<Movie[]> {
    const data = await this.infra.fetchData<any>({
      endpoint: `/discover/movie`,
      query: {
        language: 'en-US',
        sort_by: 'popularity.desc',
        page: 1,
      },
    });

    return data.results.map((item: any) => ({
      image: `https://www.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`,
      title: item.title,
      id: item.id,
    }));
  }
}
