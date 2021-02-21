export interface Movie {
  image: string;
  title: string;
  id: number;
}

export interface GetMoviesParam {}

export default interface IMovieData {
  getMovies(params?: GetMoviesParam): Promise<Movie[]>;
}
