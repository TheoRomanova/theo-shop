import "./styles.scss";
import { Button } from "antd";
import React, { useMemo, useState } from "react";

interface Props {
  portionSize: number;
  totalItemsCount: number;
  onPageChanged(page: number): void;
}

const Pagination: React.FC<Props> = ({
  totalItemsCount,
  portionSize,
  onPageChanged,
}: Props) => {
  const totalPages = Math.ceil(totalItemsCount / portionSize);
  const totalPortions = Math.ceil(totalPages / portionSize); //сколько всего порций получится
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortion = (portionNumber - 1) * portionSize + 1; //крайняя левая стр
  const rightPortion = portionNumber * portionSize; //крайняя правая стр
  const [currentPage, setCurrentPage] = useState(1);

  const getPages = useMemo(() => {
    const pages: Array<number> = [];
    for (let i = 0; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  const onSignClick = (sign: string) => {
    sign === "+"
      ? setPortionNumber(portionNumber + 1)
      : setPortionNumber(portionNumber - 1);
  };

  const onPageClick = (page: number) => {
    onPageChanged(page);
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      {portionNumber > 1 && (
        <>
          <button
            className="prev-btn"
            onClick={() => onSignClick("-")}
          ></button>
          <span>...</span>
        </>
      )}

      {getPages
        .filter((page: number) => page >= leftPortion && page <= rightPortion)
        .map((page: number) => {
          return (
            <Button
              className={currentPage === page ? "active-page" : ""}
              key={page}
              onClick={() => onPageClick(page)}
            >
              {page}
            </Button>
          );
        })}

      {portionNumber < totalPortions && (
        <>
          <span> ... </span>
          <button
            className="next-btn"
            onClick={() => onSignClick("+")}
          ></button>
        </>
      )}
    </div>
  );
};

export default React.memo(Pagination);
