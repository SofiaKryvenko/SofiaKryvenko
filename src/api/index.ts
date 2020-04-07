import {
    EAPIActions,
    IAPISearch,
    IAPIDiscoverOptions,
    EAPIMovieActions,
    IAPIMovieCallback,
  } from './apiTypes';
  const API_BASE = 'https://api.themoviedb.org/3/';
  const API_KEY = "?api_key=39311c41479f08ddf9ea3943cacb7991";;
  
  export function useApi(
    queryType: EAPIActions.search,
  ): (term: string) => Promise<IAPISearch>;
  
  export function useApi(queryType: EAPIActions.movie): IAPIMovieCallback;
  
  export function useApi(
    queryType: EAPIActions.discover,
  ): (options: IAPIDiscoverOptions) => Promise<IAPISearch>;
  
  export function useApi(queryType: EAPIActions) {
    let apiRequestCallback;
  
    switch (queryType) {
      case EAPIActions.search: {
        apiRequestCallback = async (term: string) => {
          const api = `${API_BASE}${
            EAPIActions.search
          }?api_key=${API_KEY}&query=${encodeURI(term)}`;
  
          return await (await fetch(api)).json();
        };
        break;
      }
  
      case EAPIActions.movie: {
        apiRequestCallback = async (
          term: string,
          movieQueryType?: EAPIMovieActions,
        ) => {
          const api = `${API_BASE}${EAPIActions.movie}/${term}${movieQueryType &&
            `/${movieQueryType}`}?api_key=${API_KEY}`;
          return await (await fetch(api)).json();
        };
        break;
      }
  
      case EAPIActions.discover: {
        apiRequestCallback = async (options: IAPIDiscoverOptions) => {
          let discoverOptions = '';
          let option: keyof IAPIDiscoverOptions;
  
          for (option in options) {
            discoverOptions.concat(`${option}${options[option]}&`);
          }
  
          const api = `${API_BASE}${EAPIActions.discover}?${discoverOptions}api_key=${API_KEY}`;
          return await (await fetch(api)).json();
        };
        break;
      }
    }
  
    return apiRequestCallback;
  }
  
  export default useApi;