'use client'


const Pagination = ({handleNextPage, handlePreviousPage, page, totalPages}) => {
  

  return (
    <div className="flex flex-col items-center mt-12">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 dark:text-white">{page}</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalPages}</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {/* Buttons */}
        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-yellow-900 rounded-s hover:bg-yellow-500 dark:bg-gray-800 border-yellow-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePreviousPage} disabled={page === 1}>
          <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
          Prev
        </button>
        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-yellow-900 border-0 border-s border-yellow-900 rounded-e hover:bg-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNextPage} disabled={page === totalPages}>
          Next
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
