import { RootState } from '../../../app/store';
import { getFavoriteMoviesFilterValueSelector } from '../store/selectors';

describe('favorites selectors', () => {
  it('filter value should not compute again with the same state', () => {
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
    };
    getFavoriteMoviesFilterValueSelector.resetRecomputations();
    const result = getFavoriteMoviesFilterValueSelector(state);
    expect(result).toEqual('');
    expect(getFavoriteMoviesFilterValueSelector.recomputations()).toEqual(1);
    getFavoriteMoviesFilterValueSelector(state);
    expect(getFavoriteMoviesFilterValueSelector.recomputations()).toEqual(1);
  });
});
