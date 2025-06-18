export type ApiListResponse<Type> = {
  total: number,
  items: Type[]
};

export type ApiPostMethods = 'GET' | 'DELETE' | 'POST';

export class Api {
  readonly baseUrl: string;

  protected options: RequestInit;

  constructor(baseUrl: string, options: RequestInit = {}) {
    this.baseUrl = baseUrl;
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers as object ?? {}),
      },
    };
  }

  protected handleResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      return response.json() as Promise<T>;
    }
    return response.json().then((data) => {
      console.error('API Error:', data);
      return Promise.reject(data.error ?? response.statusText);
    });
  }

  get<T>(uri: string, extraOptions?: RequestInit): Promise<T> {
    return fetch(this.baseUrl + uri, {
      ...this.options,
      ...extraOptions,
      method: 'GET',
    }).then((response) => this.handleResponse<T>(response));
  }

  delete<T>(uri: string, data?: object, method: ApiPostMethods = 'DELETE'): Promise<T> {
    return fetch(this.baseUrl + uri, {
      ...this.options,
      method,
      body: data ? JSON.stringify(data) : undefined,
    }).then((response) => this.handleResponse<T>(response));
  }

  post<T>(uri: string, data?: object, method: ApiPostMethods = 'POST'): Promise<T> {
    return fetch(this.baseUrl + uri, {
      ...this.options,
      method,
      body: data ? JSON.stringify(data) : undefined,
    }).then((respone) => this.handleResponse<T>(respone));
  }
}