import { IInfra, IMovieData } from '~/protocols';
import { GetMoviesParam, Movie } from '~/protocols/IMovieData';
import { Infra } from '~/vendors';

export default class MovieData implements IMovieData {
  private readonly infra: IInfra;

  constructor(infra: IInfra = new Infra()) {
    this.infra = infra;
  }

  /**
   * get discovery movies
   */
  async getDiscoveryMovies(): Promise<Movie[]> {
    const data = await this.infra.fetchData<any>({
      endpoint: `/discover/movie`,
      query: {
        language: 'en-US',
        sort_by: 'popularity.desc',
        page: 1,
        with_keywords: '',
      },
    });

    return data.results.map((item: any) => ({
      image: `https://www.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`,
      title: item.title,
      id: item.id,
      description: item.overview,
      rating: item.vote_average,
    }));
  }

  /**
   * get movies
   *
   * @param params
   */
  async getMovies(params: GetMoviesParam): Promise<Movie[]> {
    const { search } = params;
    const data = await this.infra.fetchData<any>({
      endpoint: `/search/movie`,
      query: {
        language: 'en-US',
        page: 1,
        query: search,
      },
    });

    return data.results.map((item: any) => ({
      image: item.backdrop_path
        ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`
        : '',
      title: item.title,
      id: item.id,
      description: item.overview,
      rating: item.vote_average,
    }));
  }

  /**
   * get Movie by id
   * @param id
   */
  async getMovieById(id: string | number): Promise<Movie> {
    const item = await this.infra.fetchData<any>({
      endpoint: `/movie/${id}`,
    });

    return {
      image: item.backdrop_path
        ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`
        : '',
      title: item.title,
      id: item.id,
      description: item.overview,
      rating: item.vote_average,
      budget: item.budget,
      popularity: item.popularity,
      releaseDate: item.release_date,
      revenue: item.revenue,
      tagline: item.tagline,
    };
  }
}
