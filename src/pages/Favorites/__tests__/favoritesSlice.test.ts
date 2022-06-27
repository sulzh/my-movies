import favoritesSlice, {
  FavoritesState,
  setMovie,
  deleteMovie,
  setFilterValue,
} from '../store/favoritesSlice';
import { MOVIE_TEST_ID, TEST_STRING } from '../constants';

describe('favorites reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState: FavoritesState = undefined;
    const action = { type: '' };
    const result = favoritesSlice(initialState, action);
    expect(result).toEqual({
      filterValue: '',
      favoriteMovies: [],
    });
  });
  it('setMovie action', () => {
    const initialState: FavoritesState = undefined;
    const action = setMovie(MOVIE_TEST_ID);
    const result = favoritesSlice(initialState, action);
    expect(result).toEqual({
      filterValue: '',
      favoriteMovies: [`${MOVIE_TEST_ID}`],
    });
  });
  it('deleteMovie action', () => {
    const initialState: FavoritesState = {
      filterValue: '',
      favoriteMovies: [`${MOVIE_TEST_ID}`],
    };
    const action = deleteMovie(MOVIE_TEST_ID);
    const result = favoritesSlice(initialState, action);
    expect(result).toEqual({
      filterValue: '',
      favoriteMovies: [],
    });
  });
  it('setFilterValue action', () => {
    const initialState: FavoritesState = undefined;
    const action = setFilterValue(TEST_STRING);
    const result = favoritesSlice(initialState, action);
    expect(result).toEqual({
      filterValue: TEST_STRING,
      favoriteMovies: [],
    });
  });
});
