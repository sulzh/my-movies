import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

// Styles
import './styles.scss';

type SearchBarTypes = {
	query?: string;
	onSubmit: (s: string) => void;
};

const SearchBar = (props: SearchBarTypes) => {
	const { query, onSubmit } = props;
	const [inputValue, setInputValue] = useState(query || '');

	const handleOnSubmit = (e: any) => {
		e.preventDefault();
		onSubmit(inputValue);
	};

	return (
		<div className="search-bar">
			<form className="search-bar__form" onSubmit={handleOnSubmit}>
				<input
					type="text"
					value={inputValue}
					className="search-bar__input"
					placeholder="Search movies"
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit" className="btn search-bar__btn">
					<RiSearchLine color="#0006f5" size={25} />
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
