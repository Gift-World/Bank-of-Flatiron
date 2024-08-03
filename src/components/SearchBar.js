import React from "react";

function SearchBar({ searchValue, setSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="SearchInput"
        placeholder="Search Transactions..."
        value={searchValue}
        // onChange={(e) => SetSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
