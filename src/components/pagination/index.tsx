import { useMemo, type FC } from "react";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  pageBlockLimit?: number;
}

const Pagination: FC<PaginationProps> = ({
  totalPage,
  currentPage,
  handlePageChange,
  pageBlockLimit = 10,
}) => {
  const PaginationItems = useMemo(() => {
    let items = [];
    const remainder = currentPage % pageBlockLimit;
    const startPage =
      remainder !== 0
        ? currentPage - remainder + 1
        : currentPage - (pageBlockLimit - 1);
    const endPage =
      startPage + (pageBlockLimit - 1) > totalPage
        ? totalPage
        : startPage + (pageBlockLimit - 1);

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <li
          className={`page-number ${currentPage === number ? "clicked" : ""}`}
          onClick={() => {
            handlePageChange(number);
          }}
        >
          {number}
        </li>
      );
    }

    return items;
  }, [totalPage, currentPage, handlePageChange]);

  return (
    <div className="works-pagination">
      <ol className="pagination-list">{PaginationItems}</ol>
    </div>
  );
};

export default Pagination;
