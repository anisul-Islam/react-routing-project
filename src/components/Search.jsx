import React from 'react'

const Search = ({searchTerm, onHandleSearchChange}) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={onHandleSearchChange}
      />
    </div>
  );
}

export default Search
