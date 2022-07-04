import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

// Styles
import './styles.scss';

type SearchBarTypes = {
  query?: string;
  placeholder?: string;
  onSubmit?: (d: { query: string }) => void;
  onChange?: (s: string) => void;
};

const SearchBar: React.FC<SearchBarTypes> = (props) => {
  const { query, placeholder = 'Search movies', onChange, onSubmit } = props;
  const [inputValue, setInputValue] = useState(query || '');

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    if (onSubmit) {
      onSubmit({ query: inputValue });
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="search-bar">
      <form
        className="search-bar__form"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          className="search-bar__input"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
        {!!onSubmit && (
          <button
            type="submit"
            className="btn search-bar__btn"
            disabled={!inputValue}
          >
            <RiSearchLine
              size={25}
              className="primary-color"
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default React.memo(SearchBar);
