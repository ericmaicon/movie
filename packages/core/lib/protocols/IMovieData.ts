export interface Movie {
  image: string;
  title: string;
  id: number;
  description: string;
  rating: number;
  budget?: number;
  popularity?: string;
  releaseDate?: string;
  revenue?: number;
  tagline?: string;
}

export interface GetMoviesParam {
  search?: string;
}

export default interface IMovieData {
  getDiscoveryMovies(): Promise<Movie[]>;
  getMovies(params?: GetMoviesParam): Promise<Movie[]>;
  getMovieById(id: string | number): Promise<Movie>;
}
