import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

// Models
import { Movie } from '../../utils/models';
import { SearchRequestParamsInterface } from '../../app/models';
// Components
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import Paggination from '../../components/Paggination/Paggination';
// Store
import { useSearchMoviesQuery } from '../../app/services/searchService';
// Styles
import './styles.scss';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page') || '1';
  const { data, isFetching } = useSearchMoviesQuery({ query, page });

  const submitSearch = useCallback(
    (params: SearchRequestParamsInterface) => {
      setSearchParams({
        query,
        page,
        ...params,
      });
    },
    [query, page, setSearchParams]
  );

  return (
    <div className="search-page container">
      <div className="heading container">
        <h1 className="heading__title">Search movies</h1>
        <SearchBar
          query={query}
          onSubmit={(query) => submitSearch({ query })}
        />
      </div>
      <div className="search-page__block">
        {!isFetching && data && data.results.length > 0 && (
          <>
            {data.results.map((d: Movie) => (
              <MovieCard key={d.id} {...d} />
            ))}
            <Paggination
              page={Number(page)}
              setPage={(page) => submitSearch({ page: `${page}` })}
              totalPages={data.total_pages}
            />
          </>
        )}
      </div>
      <Spinner isSpinning={isFetching} />
    </div>
  );
};

export default Search;
