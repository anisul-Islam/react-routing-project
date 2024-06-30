import React from 'react';

const Sort = ({ sortCriteria, onHandleSortChange }) => {
  return (
    <div className="sort">
      <label htmlFor="sort">Sort By: </label>
      <select
        id="sort"
        value={sortCriteria}
        onChange={onHandleSortChange}
        className="sort-select"
      >
        <option value="">Sort By</option>
        <option value="title-asc">Tilte: A to Z</option>
        <option value="title-desc">Tilte: Z to A</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-asc">Rating: Low to High</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
