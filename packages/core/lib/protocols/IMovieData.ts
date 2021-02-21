export interface Movie {
  image: string;
  title: string;
  id: number;
  description: string;
  rating: number;
}

export interface GetMoviesParam {
  search?: string;
}

export default interface IMovieData {
  getDiscoveryMovies(): Promise<Movie[]>;
  getMovies(params?: GetMoviesParam): Promise<Movie[]>;
}
