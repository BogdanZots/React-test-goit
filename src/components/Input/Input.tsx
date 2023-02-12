import { useState, memo } from "react";

import { useDebounce } from "../../hooks/useDebounce";

import { DEBAUNCE_DELAY, DEFAULT_SEARCH_PARAM, RESULTS_PER_PAGE } from "../../config/config";

import styled from "styled-components";

export type fetchReposPayload = {
  currentPage?: number | undefined;
  perPage?: number;
  searchParam?: string | undefined;
};

interface IInputProps {
  placeholder: string;
  onChange: (params: fetchReposPayload) => void;
}

const StyledInput = styled.input`
  width: 100%;
  max-width: 1400px;
  margin-top: 36px;
  min-height: 56px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 24px rgba(51, 51, 51, 0.24);
  border-radius: 4px;
  margin-bottom: 40px;
  padding: 16px;
  box-sizing: border-box;
`;

export default memo(function Input({ placeholder, onChange }: IInputProps) {
  const [inputValue, setInputValue] = useState("");
  const fetchReposWithParam = () => {
    onChange({
      currentPage: undefined,
      perPage: RESULTS_PER_PAGE,
      searchParam: inputValue || DEFAULT_SEARCH_PARAM,
    });
  };

  useDebounce(fetchReposWithParam, DEBAUNCE_DELAY);
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <div>
      <StyledInput
        value={inputValue}
        placeholder={placeholder}
        onChange={e => handleInputChange(e.target.value)}
      />
    </div>
  );
});
