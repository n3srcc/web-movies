export function Pagination({ totalItems, currentPage, paginate }) {
  const itemsPerPage = 20;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  const showPrevButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;

  return (
    <nav className="flex justify-center mt-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={!showPrevButton}
        className="mx-1 px-3 py-1 bg-gray-200 rounded text-gray-800"
      >
        Previous
      </button>
      {pageNumbers
        .slice(Math.max(currentPage - 2, 0), Math.min(currentPage + 2, totalPages))
        .map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 px-3 py-1 bg-gray-200 rounded ${currentPage === number ? 'bg-gray-500 text-white' : 'text-gray-800'
              }`}
          >
            {number}
          </button>
        ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={!showNextButton}
        className="mx-1 px-3 py-1 bg-gray-200 rounded text-gray-800"
      >
        Next
      </button>
    </nav>
  );
};