import { RootState } from '../app/store';

export function getStateWith(passedState?: any): RootState {
  const state: RootState = {
    favorites: {
      filterValue: '',
      favoriteMovies: [],
    },
    movies: {
      queries: {},
      mutations: {},
      provided: undefined,
      subscriptions: {},
      config: undefined,
    },
    search: {
      queries: {},
      mutations: {},
      provided: undefined,
      subscriptions: {},
      config: undefined,
    },
    ...passedState,
  };
  return state;
}
