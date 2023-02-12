import { useEffect, useRef, useState } from "react";

import { DEFAULT_SEARCH_PARAM, MAX_PAGES_COUNT, RESULTS_PER_PAGE } from "../../config/config";

import { fetchReposPayload } from "../Input/Input";

import styled from "styled-components";

interface IPaginationProps {
  pagesCount: number;
  onChange: (params: fetchReposPayload) => any;
  searchParam?: string;
}

const StyledNumbersContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledNumber = styled.li<{ active?: boolean }>`
  list-style: none;
  cursor: pointer;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  margin-right: 35px;
  padding: 5px;
  border-bottom: ${props => (props.active ? "4px solid #65B79A" : "")};
`;

const StyledButton = styled.button<{ disabled?: boolean }>`
  cursor: ${props => (props.disabled ? "no-drop" : "pointer")};
  margin-right: 20px;
  margin-left: 20px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${props => (props.disabled ? "silver" : "black")};
  line-height: 20px;
`;

export default function Pagination({ pagesCount, onChange, searchParam }: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginationStartValue, setStartValue] = useState(0);
  const lastPaginationNumbersValue = useRef(0);
  const firstPaginationNumbersValues = useRef(0);

  useEffect(() => {
    setStartValue(0);
    setCurrentPage(1);
  }, [searchParam]);

  const handlePageChange = (value: any) => {
    setCurrentPage(value);
    onChange({
      currentPage: value,
      perPage: RESULTS_PER_PAGE,
      searchParam: searchParam ? searchParam : DEFAULT_SEARCH_PARAM,
    });
  };

  const handlePrev = () => {
    setStartValue(firstPaginationNumbersValues.current - 1 - MAX_PAGES_COUNT);
  };

  const handeNext = () => {
    setStartValue(lastPaginationNumbersValue.current);
  };

  const renderNumbers = () => {
    const initialValue = paginationStartValue ? paginationStartValue + 1 : 0;
    const numbers = [];
    for (let i = initialValue; i < pagesCount && numbers.length < MAX_PAGES_COUNT; ++i) {
      numbers.push(i);
    }
    lastPaginationNumbersValue.current = numbers[numbers.length - 1];
    firstPaginationNumbersValues.current = numbers[0];
    return numbers.map(item => {
      return (
        <StyledNumber active={currentPage === item + 1} onClick={() => handlePageChange(item + 1)}>
          {(item as number) + 1}
        </StyledNumber>
      );
    });
  };

  const showResults = !!(pagesCount && pagesCount !== 0);

  return (
    <StyledNumbersContainer>
      <StyledButton
        disabled={firstPaginationNumbersValues.current + 1 < MAX_PAGES_COUNT}
        onClick={handlePrev}
      >
        Previous
      </StyledButton>
      {showResults && renderNumbers()}
      <StyledButton
        disabled={lastPaginationNumbersValue.current + 1 >= pagesCount}
        onClick={handeNext}
      >
        Next
      </StyledButton>
    </StyledNumbersContainer>
  );
}
