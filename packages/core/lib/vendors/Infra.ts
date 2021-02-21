import axios, { AxiosRequestConfig } from 'axios';

import { IInfra } from '~/protocols';
import { FetchDataParams } from '~/protocols/IInfra';

declare global {
  interface Window {
    API_URL: string;
    API_KEY: string;
  }
}

export default class Infra implements IInfra {
  private readonly apiUrl: string;

  private readonly apiKey: string;

  constructor(apiUrl = window.API_URL, apiKey = window.API_KEY) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  /**
   * fetch data from api
   *
   * @param params
   */
  async fetchData<T>(params: FetchDataParams): Promise<T> {
    const { endpoint, query } = params;

    const axiosParams: AxiosRequestConfig = {
      url: `${this.apiUrl}${endpoint}`,
      method: 'GET',
      params: { ...query, api_key: this.apiKey },
    };

    const response = await axios.request<T>(axiosParams);
    return response.data;
  }
}
