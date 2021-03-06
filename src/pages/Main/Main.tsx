import React, { useCallback } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

// Constants
import { navigation } from '../../navigation/constants';
// Services
import { useGetPopularMoviesQuery } from '../../app/services/moviesService';
// Components
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
// Styles
import './styles.scss';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const { data, isFetching } = useGetPopularMoviesQuery(1);

  const submitSearch = useCallback(
    (params: { query: string }) => {
      navigate({
        pathname: navigation.search,
        search: createSearchParams(params).toString(),
      });
    },
    [navigate]
  );

  return (
    <div className="main-page">
      <div className="heading container">
        <h1 className="heading__title">
          Discover, search and save movies to your collection of favorites
        </h1>
        <SearchBar onSubmit={submitSearch} />
      </div>
      {!isFetching && <MoviesSlider title="Popular movies" data={data} />}
      <Spinner isSpinning={isFetching} />
    </div>
  );
};

export default Main;
