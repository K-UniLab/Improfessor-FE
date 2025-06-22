interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageSize = 10; // 한 번에 보여줄 페이지 번호 개수
  const startPage = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
  const endPage = Math.min(startPage + pageSize - 1, totalPages);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* 이전 페이지 그룹으로 이동 */}
      <button
        onClick={() => onPageChange(Math.max(1, startPage - pageSize))}
        disabled={startPage === 1}
        className="px-3 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt;&lt;
      </button>

      {/* 페이지 번호 */}
      <div className="flex items-center space-x-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 다음 페이지 그룹으로 이동 */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, startPage + pageSize))}
        disabled={endPage === totalPages}
        className="px-3 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &gt;&gt;
      </button>
    </div>
  );
} 