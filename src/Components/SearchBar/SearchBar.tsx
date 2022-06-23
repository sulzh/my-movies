import React, { useState } from 'react';

// Styles
import './styles.scss';

type SearchBarTypes = {
	query?: string;
};

const SearchBar = (props: SearchBarTypes) => {
	const { query } = props;
	const [inputValue, setInputValue] = useState(query || '');

	return (
		<div className="search-bar">
			<form className="search-bar__form">
				<input
					type="text"
					value={inputValue}
					className="search-bar__input"
					placeholder="Find movies"
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit" className="btn search-bar__btn" />
			</form>
		</div>
	);
};

export default SearchBar;
