import { useState } from "react";

export function usePageNav(props) {
  const { users } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(users?.length / rowsPerPage);

  const paginatedUsers = users?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return {
    currentPage,
    rowsPerPage,
    totalPages,
    paginatedUsers,
    handlePageChange,
  };
}
