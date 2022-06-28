import { getFavoriteMoviesFilterValueSelector } from '../store/selectors';
import { getStateWith } from '../../../utils/test-utils';

describe('favorites selectors', () => {
  it('filter value should not compute again with the same state', () => {
    const state = getStateWith();
    getFavoriteMoviesFilterValueSelector.resetRecomputations();
    const result = getFavoriteMoviesFilterValueSelector(state);
    expect(result).toEqual('');
    expect(getFavoriteMoviesFilterValueSelector.recomputations()).toEqual(1);
    getFavoriteMoviesFilterValueSelector(state);
    expect(getFavoriteMoviesFilterValueSelector.recomputations()).toEqual(1);
  });
});
