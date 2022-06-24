// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// const lsMovies = localStorage.getItem('favMovies');

// interface FavoritesState {
// 	favoriteMovies: string[];
// }

// const initialState: FavoritesState = {
// 	favoriteMovies: lsMovies ? lsMovies.split(',') : [],
// };

// export const favoritesSlice = createSlice({
// 	name: 'favorites',
// 	initialState,
// 	reducers: {
// 		setMovie: (state, { payload }: PayloadAction<number>) => {
// 			state.favoriteMovies.push(`${payload}`);
// 		},
// 		deleteMovie: (state, { payload }: PayloadAction<number>) => {
// 			state.favoriteMovies = state.favoriteMovies.filter(
// 				(id) => id !== `${payload}`
// 			);
// 		},
// 	},
// });

// export const { setMovie, deleteMovie } = favoritesSlice.actions;

// export default favoritesSlice.reducer;
