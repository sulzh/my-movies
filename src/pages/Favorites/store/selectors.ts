import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export const getFavoriteMoviesIdsSelector = createSelector(
  (state: RootState) => state.favorites.favoriteMovies,
  (data) => data
);

export const getFavoriteMoviesFilterValueSelector = createSelector(
  (state: RootState) => state.favorites.filterValue,
  (data) => data
);
