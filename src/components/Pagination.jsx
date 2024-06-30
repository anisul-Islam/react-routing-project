import React from 'react';

const Pagination = ({ totalPages, currentPage, onHandleCurrentPage }) => {
  const handleFirstPage = () => {
    onHandleCurrentPage(1);
  };
  const handleLastPage = () => {
    onHandleCurrentPage(totalPages);
  };
  const handlePreviousChange = () => {
    if (currentPage > 1) {
      onHandleCurrentPage(currentPage - 1);
    }
  };
  const handleNextChange = () => {
    if (currentPage < totalPages) {
      onHandleCurrentPage(currentPage + 1);
    }
  };

  const getVisiblePageNumbers = () => {
    const visiblePages = 5;
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visilePageNumbers = getVisiblePageNumbers();

  return (
    <div className="pagination">
      <button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        aria-label="First Page"
      >
        &laquo;&laquo;
      </button>
      <button
        onClick={handlePreviousChange}
        disabled={currentPage === 1}
        aria-label="Previos page"
      >
        &laquo;
      </button>
      {visilePageNumbers.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            onClick={() => onHandleCurrentPage(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        onClick={handleNextChange}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        &raquo;
      </button>
      <button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        aria-label="Last Page"
      >
        &raquo; &raquo;
      </button>
    </div>
  );
};

export default Pagination;
