import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Services
import { moviesService } from './services/moviesService';
import { searchService } from './services/searchService';
// Slices
import favoritesSlice from '../pages/Favorites/store';

export const store = configureStore({
	reducer: {
		[moviesService.reducerPath]: moviesService.reducer,
		[searchService.reducerPath]: searchService.reducer,
		favorites: favoritesSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			moviesService.middleware,
			searchService.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
