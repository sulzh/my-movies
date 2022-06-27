import React, { useEffect, useMemo } from 'react';

// Models
import { Movie } from '../../utils/models';
// Components
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import MovieCard from '../../components/MovieCard/MovieCard';
// Store
import { setFilterValue } from './store';
import { useAppSelector, useAppDispatch } from '../../app/store';
import { useGetAllMoviesQuery } from '../../app/services/moviesService';
// Styles
import './index.scss';

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favoriteMovies, filterValue } = useAppSelector(
    (state) => state.favorites
  );
  const { data, isLoading } = useGetAllMoviesQuery(favoriteMovies);
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
    <div className="favorites-page container">
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
