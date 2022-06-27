import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavoritesState {
  filterValue: string;
  favoriteMovies: string[];
}

const initialState: FavoritesState = {
  filterValue: '',
  favoriteMovies: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setMovie: (state, { payload }: PayloadAction<number>) => {
      state.favoriteMovies.push(`${payload}`);
    },
    deleteMovie: (state, { payload }: PayloadAction<number>) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (id) => id !== `${payload}`
      );
    },
    setFilterValue: (state, { payload }: PayloadAction<string>) => {
      state.filterValue = payload;
    },
  },
});

export const { setMovie, deleteMovie, setFilterValue } = favoritesSlice.actions;

export default favoritesSlice.reducer;
