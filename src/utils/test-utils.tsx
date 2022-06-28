import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { RootState } from '../app/store';

export function renderWithRouter(element: React.ReactElement) {
  render(<BrowserRouter>{element}</BrowserRouter>);
}

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
