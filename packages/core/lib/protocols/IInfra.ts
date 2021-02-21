export interface FetchDataParams {
  endpoint: string;
  query?: Record<string, unknown>;
}

export default interface IInfra {
  fetchData<T>(params: FetchDataParams): Promise<T>;
}
