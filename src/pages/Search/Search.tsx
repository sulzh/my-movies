import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';
// Store
import { useSearchMoviesQuery } from '../../app/services/searchService';
// Styles
import './index.scss';

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('query');
	const { data, isLoading } = useSearchMoviesQuery(query);

	const submitSearch = useCallback(
		(q: string) => {
			setSearchParams({
				query: q,
			});
		},
		[setSearchParams]
	);

	return (
		<div className="search-page container">
			<div className="heading container">
				<h1 className="heading__title">Search movies</h1>
				<SearchBar query={query} onSubmit={submitSearch} />
			</div>
			<div className="search-page__block">
				{data &&
					data.length > 0 &&
					data.map((d: any) => <MovieCard key={d.id} {...d} />)}
			</div>
			<Spinner isSpinning={isLoading} />
		</div>
	);
};

export default Search;
