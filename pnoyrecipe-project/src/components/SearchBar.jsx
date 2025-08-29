import React from 'react';

const SearchBar = ({ value, onChange, placeholder = "Search recipes..." }) => {
  return (
    <div className="search-input-wrapper">
      <div className="search-icon">🔍</div>
      <input
        type="text"
        className="search-bar"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search recipes"
      />
      {value && (
        <button 
          className="clear-search" 
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;