import React, { useEffect, useMemo } from 'react';

// Constants
import { COMPONENT_TEST_ID } from './constants';
// Models
import { Movie } from '../../utils/models';
// Components
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import MovieCard from '../../components/MovieCard/MovieCard';
// Store
import { setFilterValue } from './store/favoritesSlice';
import { useAppSelector, useAppDispatch } from '../../app/store';
import { useGetAllMoviesQuery } from '../../app/services/moviesService';
import * as s from './store/selectors';
// Styles
import './styles.scss';

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(s.getFavoriteMoviesFilterValueSelector);
  const favoriteMoviesIds = useAppSelector(s.getFavoriteMoviesIdsSelector);
  const { data, isLoading } = useGetAllMoviesQuery(favoriteMoviesIds);
  const filteredData = useMemo(
    () =>
      data &&
      data.filter((d) =>
        d.original_title.toLocaleLowerCase().includes(filterValue)
      ),
    [data, filterValue]
  );

  useEffect(
    () => () => {
      dispatch(setFilterValue(''));
    },
    []
  );

  return (
    <div className="favorites-page container" data-testid={COMPONENT_TEST_ID}>
      <div className="heading container">
        <h1 className="heading__title">Favorite movies</h1>
        <SearchBar
          query={filterValue}
          onChange={(d) => dispatch(setFilterValue(d))}
          placeholder="Filter movies"
        />
      </div>
      <div className="favorites-page__block">
        {filteredData &&
          filteredData.length > 0 &&
          filteredData.map((d: Movie) => <MovieCard key={d.id} {...d} />)}
      </div>
      <Spinner isSpinning={isLoading} />
    </div>
  );
};

export default Favorites;
