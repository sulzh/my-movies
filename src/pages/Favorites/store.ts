import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const lsMovies = localStorage.getItem('favMovies');

interface FavoritesState {
  filterValue: string;
  favoriteMovies: string[];
}

const initialState: FavoritesState = {
  filterValue: '',
  favoriteMovies: lsMovies ? lsMovies.split(',') : [],
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
